import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Funkcja do zapisywania stanu formularza w local storage
const saveStateToLocalStorage = () => {
  
const state = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

// Funkcja do wczytywania stanu formularza z local storage
const loadStateFromLocalStorage = () => {
const stateString = localStorage.getItem('feedback-form-state');
if (stateString) {
const state = JSON.parse(stateString);
emailInput.value = state.email || '';
messageInput.value = state.message || '';
}
};

// Funkcja do czyszczenia stanu formularza i local storage
const resetFormAndLocalStorage = () => {
form.reset();
localStorage.removeItem('feedback-form-state');
};

// Dodajemy event listener do formularza, który będzie zapisywał stan 
// formularza w local storage za pomocą funkcji saveStateToLocalStorage
form.addEventListener('input', throttle(saveStateToLocalStorage, 500));

// Po załadowaniu strony wczytujemy stan formularza z local 
// storage za pomocą funkcji loadStateFromLocalStorage
loadStateFromLocalStorage();

// Dodajemy event listener do formularza, który będzie
//  resetował stan formularza i local storage po jego 
// wysłaniu za pomocą funkcji resetFormAndLocalStorage
form.addEventListener('submit', (ev) => {
ev.preventDefault();
resetFormAndLocalStorage();
console.log('Form data:', {
email: emailInput.value,
message: messageInput.value,
});
});