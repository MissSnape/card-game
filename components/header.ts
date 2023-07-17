import { renderApp } from '../index';
import { time } from './time';

export function headerRenderer({ element }: { element: HTMLElement }) {
    console.log(element);
    element.innerHTML = `<header class="header">
    <div class="timer">
    <p class='timer'>00.00</p>
    </div>
    <button type="submit" class="restart_button">
        Начать заново
    </button>
    </header>`;
    (document.querySelector('.restart_button') as HTMLElement).addEventListener(
        'click',
        () => renderApp('level')
    );
    const timer = document.querySelector('.timer') as HTMLElement;
let fullGameTime = 0;
setInterval(()=>{
    fullGameTime++;
    timer.innerHTML = time(fullGameTime);
}
, 1000);
}
