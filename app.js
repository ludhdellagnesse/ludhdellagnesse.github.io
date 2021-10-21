function MostrarCampoPesquisar(){
    let campo = document.querySelector("#campo")
    if(campo.style.display == "inline"){
       campo.style.display = "none"
    }else{
    campo.style.display = "inline"
    }
}
// objetos + array
projeto1 = {
    titulo: 'calculadora' ,
    descricao : 'Projeto desenvolvido utilizando javascrip, htmnl e css de uma calculadora de média simples.' ,
    foto: 'calculadora.png'
}
projeto2 = {
    titulo: 'conversor' ,
    descricao: 'Projeto desenvolvido utilizando javascrip, htmnl e css de um conversor de moedas entre dólar e Real.' ,
    foto: 'conversor-moedas.png'
}
let projetos = [projeto1 , projeto2]
let projetoAtual = 0

function ProximoProjeto(){
    if (projetoAtual < 3){
        projetoAtual++
    }else{
        projetoAtual=0
    }
    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual].titulo

    descricao = document.querySelector('.texto-corpo')
    descricao.innerHTML = projetosDescricao[projetoAtual].descricao

    imagem = document.querySelector('.foto-perfil')
    imagem.src= "images/" + projetos[projetoAtual].foto
}