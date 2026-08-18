const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        const place = card.querySelector("h3").innerText;
        alert("You selected " + place);
    });
});