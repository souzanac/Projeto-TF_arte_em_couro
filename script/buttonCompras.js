const cards = document.querySelectorAll('.cards');

for (const card of cards) {
  const btnComprar = card.querySelector('#btnComprar');
  const nomeProduto = card.querySelector('.nome_produto').textContent;
  const precoProduto = card.querySelector('.preço').textContent;

  btnComprar.addEventListener('click', function() {
    const mensagemPredefinida = `Olá, gostaria de encomendar o ${nomeProduto} por R$ ${precoProduto}. Qual o prazo final de entrega?`;
    const linkWhatsApp = `https://wa.me/+5534999751986?text=${mensagemPredefinida}`;
    window.open(linkWhatsApp, '_blank');
  });
}


