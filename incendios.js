
// Script del Header

const header = document.querySelector('header');
      
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
    });

document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.nav-menu .dropdown');
    if (dropdowns.length === 0) { return; 
    }
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('a'); 
        trigger.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation(); 
            const isAlreadyActive = dropdown.classList.contains('active');
            dropdowns.forEach(d => d.classList.remove('active'));
            if (!isAlreadyActive) {
                dropdown.classList.add('active');
              }
            });
        });
    window.addEventListener('click', function () {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
});

//Script de las tarjetas de Pasos

let currentIndex = 0;
const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".paso");
let cardWidth = cards[0].offsetWidth;
const totalCards = cards.length;

// El ancho de la tarjeta se ajusta al tamaño de la ventana
function updateCardWidth() {
  cardWidth = cards[0].offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

window.addEventListener("resize", updateCardWidth);

// Código del botón "avanzar"
function nextCard() {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
}

// Código del botón "atrás"
function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}
