export default async function faturamento() {
    const res = await fetch('/main/dados.json');
    const dados = await res.json();
    operatingData(dados);
}
const operatingData = (dados) => {
    const total = document.getElementById('total');
    const melhor_dia = document.getElementById('melhor_dia');
    const pior_dia = document.getElementById('pior_dia');
    const qtd_melhor_dia = document.getElementById('qtd_melhor_dia');
    let valores = dados.map((el) => el.valor);
    let maiorvalor = Math.max(...valores);
    let valoresPositivos = valores.filter((valores) => valores > 0)
    let menorvalor = Math.min(...valoresPositivos);
    let soma = valores.reduce((total, valor) => total + valor, 0);
    let media = soma/30;
    let qtdMelhoresDias = valores.filter((valor) => valor > media);
    let padronizar = new Intl.NumberFormat('pt-BR', {
        casasDecimais: 2,
        casasDecimais: 2,
    });
    maiorvalor = padronizar.format(maiorvalor);
    menorvalor = padronizar.format(menorvalor);
    soma = padronizar.format(soma);
    media = padronizar.format(media);
    qtdMelhoresDias = qtdMelhoresDias.map((valor) => padronizar.format(valor),
    );
    melhor_dia.lastChild.textContent = maiorvalor;
    pior_dia.lastChild.textContent = menorvalor;
    qtd_melhor_dia.children[0].textContent = qtdMelhoresDias.length;
};
