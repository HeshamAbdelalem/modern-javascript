const button = document.querySelector('button');
const close = document.querySelector('.popup-close');
const wrapper = document.querySelector('.popup-wrapper');

// console.log('TCL: body', body);

// console.log('TCL: wrapper', wrapper);
close.addEventListener('click', e => {
  wrapper.style.display = 'none';
  wrapper.classList.remove('popup-flex');
});

button.addEventListener('click', e => {
  wrapper.style.display = 'flex';
  wrapper.classList.add('popup-flex');
});

/* wrapper.addEventListener('click', () => {
  wrapper.style.display = '';
  wrapper.classList.remove('popup-flex');
});
 */
