import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.map(({ description, original, preview }) => {
    const galleryItem = `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </div>`
    gallery.insertAdjacentHTML("beforeend", galleryItem)
});

new SimpleLightbox('.gallery a', { captionDelay: 250, captionPosition: "outside", captionsData: "alt" });

console.log(galleryItems);
