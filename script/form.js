$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        var email = $('#email').val();
        var senha = $('#senha').val();
        var tipoUsuario = $('input[name="tipo_usuario"]:checked').val();

        if (email && senha && tipoUsuario) {
            if (tipoUsuario === 'cliente') {
                window.location.href = 'usuario.html';
            } else if (tipoUsuario === 'administrador') {
                window.location.href = 'controle_administrador.html';
            }
        } else {
            alert('Por favor, preencha todos os campos e selecione um tipo de usuário.');
        }
    });
});