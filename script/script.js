document.getElementById("foto_vendedor").addEventListener("click", function() {
    document.getElementById("upload_foto").click();
});

document.getElementById("upload_foto").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("foto_vendedor").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("escolha_formulario_produtos").addEventListener("click", function() {
    document.getElementById("formulario_produtos").style.display = "block";
    document.getElementById("formulario_senha").style.display = "none";
});

document.getElementById("escolha_formulario_senha").addEventListener("click", function() {
    document.getElementById("formulario_senha").style.display = "block";
    document.getElementById("formulario_produtos").style.display = "none";
});

document.getElementById("apagar_conta").addEventListener("click", function() {
    if (confirm("Tem certeza que deseja apagar sua conta?")) {
        // Lógica para apagar a conta
    }
});

 document.getElementById('escolha_formulario_produtos').addEventListener('click', function() {
            document.getElementById('formulario_produtos').style.display = 'block';
        });

        function previewImage(event) {
            var reader = new FileReader();
            reader.onload = function() {
                var output = document.getElementById('foto_preview');
                output.src = reader.result;
                output.style.display = 'block';
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        document.getElementById('escolha_formulario_produtos').addEventListener('click', function() {
            document.getElementById('formulario_produtos').style.display = 'block';
        });

        function previewImage(event) {
            var reader = new FileReader();
            reader.onload = function() {
                var output = document.getElementById('foto_preview');
                output.src = reader.result;
                output.style.display = 'block';
            };
            reader.readAsDataURL(event.target.files[0]);
        }


