export default function fibo(num) {
  let num1 = 0;
  let num2 = 1;
  while (num2 < num) {

    [num1, num2] = [num2, num1 + num2];
  }
  return num2 === num;
}


const result = document.getElementById('resultado');
const numInput = document.getElementById('num-input');
const checkButton = document.getElementById('button');

checkButton.addEventListener('click', () => {
  const num = parseInt(numInput.value);
  if (isNaN(num)) {
    result.textContent = 'Digite um número válido';
  } else if (fibo(num)) {
    result.textContent = `${num} Pertence sequência de Fibonacci`;
  } else {
    result.textContent = `${num} Não pertence sequência de Fibonacci`;
  }
});