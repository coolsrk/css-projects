let keyCode = document.querySelector('.key-code');
let whichCode = document.querySelector('.which-code');
let locationCode = document.querySelector('.location-code');
let codeCode = document.querySelector('.code-code');

const title = document.querySelector('.title');
const content = document.querySelector('.content');
const boxes = document.querySelectorAll('.box');

// initially hide all the content and boxes
content.style.display = 'none';
boxes.forEach((box) => {
  box.style.display = 'none';
  box.style.opacity = 0;
});


document.addEventListener('keydown', (e) => {
  e.preventDefault();
  title.style.display = 'none';
  content.style.display = 'block';
  content.style.opacity = 1;
  boxes.forEach((box) => {
    box.style.display = 'block';
    box.style.opacity = 1;
  });

  keyCode.innerHTML = e.key === " " ? "Space" : e.key;
  whichCode.innerHTML = e.which;
  locationCode.innerHTML = e.location;
  codeCode.innerHTML = e.code;
});
