//FORMULÁRIO CADASTRO CLIENTE

function saveUserInfo(event) {
    event.preventDefault();  // Impede o envio do formulário

    var userInfo = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        telefone: document.getElementById("telefone").value
    };

    //comando responsável por salvar as informações no localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // ao clicar no botão do formulário levará a página de perfil do usuário
    window.location.href = "userProfile.html";
}

