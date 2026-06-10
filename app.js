/* =========================
   BARRE DE PROGRESSION
========================= */

window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");

    const scrollTop = window.scrollY;
    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / documentHeight) * 100;

    progressBar.style.width = progress + "%";
});


/* =========================
   FAQ DÉROULANTE
========================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        answer.classList.toggle("active");
    });
});


/* =========================
   BOUTON RETOUR EN HAUT
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   ANIMATION DES CARTES
========================= */

const cards = document.querySelectorAll(".card");

function revealCards() {

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealCards);

revealCards();


/* =========================
   ANIMATION DES SECTIONS
========================= */

const sections = document.querySelectorAll(
    ".about, .faq"
);

function revealSections() {

    const triggerBottom = window.innerHeight * 0.90;

    sections.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show-section");
        }

    });
}

window.addEventListener("scroll", revealSections);

revealSections();


/* =========================
   EFFET LOGO
========================= */

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("mouseenter", () => {
        logo.style.transform = "scale(1.05)";
    });

    logo.addEventListener("mouseleave", () => {
        logo.style.transform = "scale(1)";
    });

}


/* =========================
   MESSAGE DE BIENVENUE
========================= */

console.log(
    "Bienvenue sur BusinessAtlas 🚀"
);