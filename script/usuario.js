// script.js
$(document).ready(function() {
    // Exemplo de categorias de interesse do usuário
    var userInterests = ['Cinto', 'Carteira'];

    // Preencher categorias de interesse do usuário
    userInterests.forEach(function(interest) {
        $('#displayCategories').append(`<span class="badge badge-primary mr-2">${interest}</span>`);
    });

    // Função para mostrar a seção de edição de perfil
    $('#editProfileButton').on('click', function() {
        $('#editProfileSection').show();
        $('#saveChangesButton').prop('disabled', true);
    });

    // Função para cancelar a edição de perfil
    $('#cancelEditButton').on('click', function() {
        $('#editProfileSection').hide();
    });

    // Função para habilitar o botão de salvar alterações quando houver mudanças no formulário
    $('#profileForm input').on('change', function() {
        $('#saveChangesButton').prop('disabled', false);
    });

    // Função para salvar alterações no perfil
    $('#saveProfileButton').on('click', function() {
        $('#editProfileSection').hide();
        $('#saveChangesButton').prop('disabled', true);
        alert('Perfil atualizado com sucesso!');
    });

    // Função para mudar a senha
    $('#changePasswordButton').on('click', function() {
        // Lógica para mudar a senha
        alert('Redirecionar para a página de mudança de senha');
    });

    // Função para enviar sugestão de design
    $('#suggestionForm').on('submit', function(event) {
        event.preventDefault();
        // Lógica para processar a sugestão
        alert('Sugestão enviada com sucesso!');
    });

    // Função para enviar feedback
    $('#feedbackForm').on('submit', function(event) {
        event.preventDefault();
        // Lógica para processar o feedback
        alert('Feedback enviado com sucesso!');
    });

    // Função para enviar dúvida
    $('#questionForm').on('submit', function(event) {
        event.preventDefault();
        // Lógica para processar a dúvida
        alert('Dúvida enviada com sucesso!');
    });

    // Função para enviar inscrição
    $('#subscriptionForm').on('submit', function(event) {
        event.preventDefault();
        // Lógica para processar a inscrição
        alert('Inscrição realizada com sucesso!');
    });

    // Função para enviar categorias de interesse
    $('#interestForm').on('submit', function(event) {
        event.preventDefault();
        // Lógica para processar o interesse
        alert('Interesse enviado com sucesso!');
    });
});
