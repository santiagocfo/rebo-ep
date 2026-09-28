//teste de script.js
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// Mostra a mensagem no Console
 console.log("Como você chegou até aqui!?");

// Encontra e mostra o título principal
 console.log(document.querySelector("h1"));
// altera o conteúdo do título principal
 const tituloPrincipal = document.querySelector("h1");
tituloPrincipal.textContent = "seja bem vindo ao site da oliveirascf.ti";
//configura o formulario de contato
 const formularioContato = document.querySelector("#formularioContato");
//configura a mensagem de sucesso
 const mensagemSucesso = document.querySelector("#mensagemSucesso");
 const slnNome = document.querySelector("#nome");
 const mensagem = document.querySelector("#mensagem");
// quando o usuário pressiona a tecla Enter no campo de mensagem, envia o formulário
mensagem.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        evento.preventDefault();
        formularioContato.requestSubmit();
    }
});
 
// código executado ao enviar o formulário
 formularioContato.addEventListener("submit", function (evento) {
    
    // ações do envio
     evento.preventDefault();
    const nomeDigitado = slnNome.value.trim();
    const mensagemDigitada = mensagem.value.trim();
       
    if (nomeDigitado === "" || mensagemDigitada === "") {
    mensagemSucesso.classList.add("mensagem-erro");
    mensagemSucesso.textContent = "Por favor, preencha seu nome e sua mensagem.";
    return;
}

     console.log("O seu pedido foi enviado com sucesso!");
         mensagemSucesso.classList.remove("mensagem-erro");
     mensagemSucesso.textContent =
        `Olá, ${nomeDigitado}! Recebemos a sua mensagem.`;

     slnNome.value = "";
     mensagem.value = "";
});



