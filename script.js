let currentSlider = 0;
const sliders = document.querySelectorAll('.slider-item');
const slideInterval = 8000; // 8 segundos

function showSlider(index) {
  sliders.forEach((slider, i) => {
    if (i === index) {
      slider.classList.add('active');
    } else {
      slider.classList.remove('active');
    }
  });
}

function nextSlider() {
  currentSlider = (currentSlider + 1) % sliders.length;
  showSlider(currentSlider);
}

setInterval(nextSlider, slideInterval);

// Mostrar el primer slider al cargar la página
showSlider(currentSlider);
