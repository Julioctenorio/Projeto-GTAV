/*

  Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.
        Passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele
        
        Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

        passo 3 - pegar o click di usuário no JS

        passo 4 - quando o usuário clicar, adicionar a classe ativo no conteúdo do botão para que o conteúdo dele apareço 

  
  Objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.
        Passo 1 - verificar se o botão ja foi ativado pelo usuário, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente

*/


//1
const btnPlataform = document.querySelector(".btn-plataform");

//2
const elementPlataform = document.querySelector(".btn-plataform .plataforms");

//3
btnPlataform.addEventListener("click", () => {
  elementPlataform.classList.toggle("ativo") 
})