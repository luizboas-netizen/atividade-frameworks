// Funcionamento do formulário de contato

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (evento) {

    // Impede o recarregamento da página
    evento.preventDefault();

    // Captura o nome informado
    const nome = document.getElementById("nome").value;

    // Exibe mensagem de sucesso
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpa os campos do formulário
    formulario.reset();

});