const html = document.querySelector('html');
const fundoSao = document.querySelector('.spfc');
const fundoCor = document.querySelector('.corint');
const fundoReset = document.querySelector('.botao-reset');

fundoSao.addEventListener('click', () =>{
    html.setAttribute('fundo-torcida', 'tri-campeao')
})

fundoCor.addEventListener('click', () =>{
    html.setAttribute('fundo-torcida', 'vai-curintia')
})

fundoReset.addEventListener('click', () =>{
    html.setAttribute('fundo-torcida', 'nada')
})

function RadioTricolor (){
    document.querySelector('.trikas').play();
}
document.querySelector('.spfc').onclick = RadioTricolor;

function RadioGavioes (){
    document.querySelector('.gamba').play();
}
document.querySelector('.corint').onclick = RadioGavioes;