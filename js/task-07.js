const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', (e) => {
    text.setAttribute('style', `font-size: ${e.target.value}px`);
})