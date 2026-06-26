// Seleciona os elementos
const form = document.getElementById("formContato");
const btnLimpar = document.getElementById("btnLimpar");
const btnEnviar = document.getElementById("btnEnviar");
const feedback = document.getElementById("msgFeedback");

// Função para enviar
btnEnviar.addEventListener("click", function () {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        feedback.textContent = "Preencha todos os campos!";
        feedback.style.color = "red";
        return;
    }

    // Validação simples do email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        feedback.textContent = "Digite um e-mail válido!";
        feedback.style.color = "red";
        return;
    }

    // Mensagem de sucesso
    feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    feedback.style.color = "green";

    // Limpa o formulário após 2 segundos
    setTimeout(() => {
        form.reset();
    }, 2000);
});

// Botão limpar
btnLimpar.addEventListener("click", function () {

    const confirmar = confirm("Deseja realmente limpar o formulário?");

    if (confirmar) {
        form.reset();
        feedback.textContent = "";
    }
});