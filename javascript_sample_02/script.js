// JavaScript
console.log('読み込みOK');

//5-1｜繰り返し
const btnRed = document.querySelector('.btn-red');
const btnGreen = document.querySelector('.btn-green');
const btnBlue = document.querySelector('.btn-blue');

btnRed.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});
btnGreen.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
});
btnBlue.addEventListener('click', () => {
  document.body.style.backgroundColor = 'blue';
});

// 5-2｜引数
function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}

const btnArgs = document.querySelectorAll('.btn-arg');
btnArgs.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.getAttribute('data-color');
    changeBgColor(color); // 引数として渡す
  });
});

// ６｜汎用性のある関数
// ランダムな16進6桁のカラーコードを生成
function randomColor() {
  const col = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
  return '#' + col;
}

// 関数の呼び出し
const btnGeneric = document.querySelector('.btn-generic');
btnGeneric.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
});
