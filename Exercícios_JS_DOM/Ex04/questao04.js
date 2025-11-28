function validarFormulario() {
    
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNasc = document.getElementById("dataNasc").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const mensagem = document.getElementById("mensagem");

    const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    if (nome === "" || cpf === "") {
        mensagem.innerText = "Os campos Nome e CPF são obrigatórios.";
        mensagem.style.color = "red";
        return;
    }

    if (!cpfValido.test(cpf)) {
        mensagem.innerText = "CPF inválido! Use o formato 000.000.000-00.";
        mensagem.style.color = "red";
        return;
    }

    mensagem.innerText = "Cadastro validado com sucesso!";
    mensagem.style.color = "green";
}
