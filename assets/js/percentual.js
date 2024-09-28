export default function percentual() {
    let sp = 67.836;
    let rj = 36.678;
    let mg = 29.229;
    let es = 27.165; 
    let outros = 19.849;
    let soma = sp+rj+mg+es+outros;
    sp = (sp*100)/soma;
    rj = (rj*100)/soma;
    mg = (mg*100)/soma;
    es = (es*100)/soma;

    const percentuais = document.getElementById('percentuais');
    percentuais.children[0].innerText += ' ' + sp.toFixed() + '%';
    percentuais.children[1].innerText += ' ' + rj.toFixed() + '%' ;
    percentuais.children[2].innerText += ' ' + mg.toFixed() + '%';
    percentuais.children[3].innerText += ' ' + es.toFixed() + '%';
}


