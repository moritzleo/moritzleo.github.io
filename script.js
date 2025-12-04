// Maus-Follower Blob Logik [cite: 9]
const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  
  // Verzögerter Follow-Effekt durch Animation (definiert in CSS 'transition')
  // Wir updaten die Position basierend auf der Maus
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 1200, fill: "forwards" });
};

// Smooth Scroll für Anker-Links (optional, falls CSS scroll-behavior nicht reicht)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Optional: Burger-Animation zu X
    // Hier könntest du CSS-Klassen für die Striche togglen
});

// Menü schließen, wenn man auf einen Link klickt
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
// Lightbox für Projektbilder
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxBackdrop = document.querySelector('.image-lightbox-backdrop');
const lightboxClose = document.querySelector('.image-lightbox-close');

document.querySelectorAll('.project-image img').forEach(img => {
    img.addEventListener('click', () => {
        const fullSrc = img.dataset.full || img.src;
        lightboxImg.src = fullSrc;
        lightbox.classList.add('open');
    });
});

function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
}

lightboxBackdrop.addEventListener('click', closeLightbox);
lightboxClose.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});
