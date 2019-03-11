(function slider() {
    let frame = 0;

    const slides = ['../images/2.jpg', '../images/3.jpg', '../images/4.jpg', '../images/5.jpg', '../images/6.jpg'];
    const container = document.getElementById("scr");
    const previous = document.querySelector('.portfolio__arrow--left');
    const right = document.querySelector('.portfolio__arrow--right');
    const quantity = document.querySelector('.portfolio__counter--all');
    const currentSlide = document.querySelector('.portfolio__counter--current');

    previous.addEventListener("click", function () {
        frame--;
        if (frame < 0) {
            frame = slides.length - 1;
        }

        setBackgroundImage(slides[frame]);
        setCurrentSlide(frame + 1)
    });

    right.addEventListener("click", function () {
        frame++;
        if (frame === slides.length) {
            frame = 0;
        }

        setBackgroundImage(slides[frame]);
        setCurrentSlide(frame + 1)
    });

    setBackgroundImage(slides[0]);
    quantity.innerHTML = slides.length;
    setCurrentSlide(1);


    function setBackgroundImage(imgUrl) {
        container.style.backgroundImage = `url(${imgUrl})`;
    }

    function setCurrentSlide(number) {
        currentSlide.innerHTML = number;
    }

})();

