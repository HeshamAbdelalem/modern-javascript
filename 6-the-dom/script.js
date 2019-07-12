const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  console.log(e.offsetX);
  box.textContent = `X offset: ${e.offsetX} & Y offset ${e.offsetY}`;
});

const copy = document.querySelector('.copy');

copy.addEventListener('copy', () => {
  console.log("DONT'T COPY MY SHIT!!");
});

const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', e => {
  let li = document.createElement('li');
  li.textContent = 'New Li ;)';
  ul.append(li);
});

ul.addEventListener('click', e => {
  e.target.remove();
});
