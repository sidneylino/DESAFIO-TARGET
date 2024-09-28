export default function convert() {
    const resReverse = document.getElementById('resReverse');
    const palavraInput = document.getElementById('palavra');
    const palavra = palavraInput.value;

    let revertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        revertida += palavra[i];
    }
    resReverse.textContent = revertida;
}
const botao = document.getElementById('btn');
botao.addEventListener('click', convert);