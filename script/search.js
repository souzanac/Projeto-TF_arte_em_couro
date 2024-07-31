$(document).ready(function() {
    function performSearch() {
        var query = $('#search-bar').val().toLowerCase().trim();
        console.log("Consulta de busca: ", query);

        // Verificar se a consulta não está vazia
        if (query === '') {
            alert('Por favor, digite algo para buscar.');
            return;
        }

        // Buscar por categorias
        if (query.includes('cintos')) {
            console.log('Redirecionando para cintos.html');
            window.location.href = './cintos.html';
            return;
        } else if (query.includes('carteiras')) {
            console.log('Redirecionando para carteiras.html');
            window.location.href = './carteiras.html';
            return;
        } else if (query.includes('outros')) {
            console.log('Redirecionando para outros.html');
            window.location.href = './outros.html';
            return;
        }

        // Buscar por nome de produto ou preço
        var found = false;
        $('.cards').each(function() {
            var productName = $(this).find('.nome_produto').text().toLowerCase();
            var productPrice = $(this).find('.preco').text().toLowerCase().replace('r$', '').trim();

            console.log('Nome do produto: ', productName);
            console.log('Preço do produto: ', productPrice);

            if (productName.includes(query) || productPrice.includes(query)) {
                $(this).show();
                found = true;
            } else {
                $(this).hide();
            }
        });

        if (!found) {
            alert('Nenhum produto encontrado.');
        }
    }

    $('#search-button').on('click', function() {
        performSearch();
    });

    $('#search-bar').on('keypress', function(e) {
        if (e.which === 13) { // Enter key
            e.preventDefault(); // Previne a ação padrão do Enter
            performSearch();
        }
    });
});
