var imagem = window.document.getElementById('img')

function sim(){
    imagem.src = 'img/coelho apaixonado.png'
}
function desvia(t){
    btn = t
    btn.style.position = 'absolute'
    btn.style.top = numeroaleatorio(15,85)
    btn.style.left = numeroaleatorio(15,85)
    imagem.src = 'img/coelho_bravo.png'
    imagem.style.width = '400px'
}

function numeroaleatorio(min,max){
    return (Math.random() * (max - min) + min) +'%'
}
function apaixonado(){
    
    imagem.src = 'img/coelho apaixonadinho.jfif'
    imagem.style.width = '400px'
}
function ancioso(){
    
    imagem.src = 'img/coelho ancioso.png'
    imagem.style.width = '400px'
}
function bravo(){
    
    
}
