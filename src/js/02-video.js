import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const oneSaveTimeUpdate = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', `${seconds}`);
};
const actualTime = localStorage.getItem('videoplayer-current-time')

player
    .setCurrentTime(actualTime)
    .then(function ({seconds}) { console.log(seconds)})    
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':      
                break;
            default:                
                break;
        }
    });

player.on('timeupdate', throttle(oneSaveTimeUpdate, 1000));