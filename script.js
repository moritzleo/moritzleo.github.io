// Maus-Blob Bewegung
const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
    const { clientX, clientY } = event;

    blob.animate(
        { left: `${clientX}px`, top: `${clientY}px` },
        { duration: 1200, fill: "forwards" }
    );
};

// Smooth Scroll für interne Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Burger-Menü
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Navigation schließen, wenn ein Link geklickt wird
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Lightbox für Projektbilder
const lightbox = document.getElementById("image-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const backdrop = document.querySelector(".image-lightbox-backdrop");
const closeBtn = document.querySelector(".image-lightbox-close");

document.querySelectorAll(".project-image img").forEach((img) => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.dataset.full || img.src;
        lightbox.classList.add("open");
    });
});

function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
}

backdrop.addEventListener("click", closeLightbox);
closeBtn.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});
