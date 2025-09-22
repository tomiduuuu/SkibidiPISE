
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
const totalCards = 10;

function nextCard() {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * 300}px)`;
    }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * 300}px)`;
  }
}
