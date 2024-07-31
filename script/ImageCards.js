document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.cards .imagens');

    cards.forEach(card => {
        let mainImage = card.src;
        let altImage = card.getAttribute('data-alt');

        setInterval(() => {
            if (card.src === mainImage) {
                card.src = altImage;
            } else {
                card.src = mainImage;
            }
        }, 2000);
    });
});
