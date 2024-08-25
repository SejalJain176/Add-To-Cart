document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".main-card");

    cards.forEach(card => {
        const cardTitle = card.querySelector(".card-title");
        const cardBody = card.querySelector(".card-body");


        cardTitle.addEventListener("click", function() {
            cards.forEach(c => {
                const otherBody = c.querySelector(".card-body");
                const otherTitle = c.querySelector(".card-title");
                if (otherBody !== cardBody) {
                    otherBody.classList.remove("expanded");
                    otherTitle.classList.remove("hidden");
                }
            });
            cardTitle.classList.toggle("hidden");
            cardBody.classList.toggle("expanded");
        });
    });
});

