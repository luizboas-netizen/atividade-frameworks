

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (evento) {

    
    evento.preventDefault();

    
    const nome = document.getElementById("nome").value;

    
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    
    formulario.reset();

});
