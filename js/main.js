function contentLoaded() {

  // CAROUSELS
  const carousel = document.getElementById('carousel');

  function carouselFunctionality(carousel) {

    // Seleccionar los elementos dentro del carousel que se reciba como argumento
    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(track.children);

    const nextButton = carousel.querySelector('.carousel__button--right');
    const prevButton = carousel.querySelector('.carousel__button--left');

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Posicionar cada slide al lado de la otra
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    }
    slides.forEach(setSlidePosition);

    // Mover a la slide correspondiente
    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left +')';

      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
    }

    // Agregar event listeners para los botones de avance y retroceso
    prevButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling;

        // Solo ir a la slide siguiente si esta existe
      if(currentSlide.previousElementSibling) {
        moveToSlide(track, currentSlide, prevSlide);
      }
    });

    nextButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;

      // Solo ir a la slide siguiente si esta existe
      if(currentSlide.nextElementSibling) {
        moveToSlide(track, currentSlide, nextSlide);
      }
    });
  }

  // Llamar a la función para cada carousel de la página
  carouselFunctionality(carousel);



}