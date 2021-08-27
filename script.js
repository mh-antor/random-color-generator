const colors = [
  'Orangered',
  'Blue',
  'Yellow',
  'Green',
  'Orange',
  'Cyan',
  'DodgerBlue',
  'Violet',
  'Navy',
  'Purple',
  'YellowGreen',
  'OrangeRed',
  'SlateBlue',
  'Salmon',
  'Crimson',
  'HotPink',
  'Magenta',
];

const button = document.querySelector('.btn');
let index = 0;

button.addEventListener('click', function (e) {
  if (index > colors.length - 1) {
    index = 0;
  }
  document.body.style.backgroundColor = colors[index++];
});
