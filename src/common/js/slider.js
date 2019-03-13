let slider = {

    init: function () {
        this.setActiveNav(this.sliderContainer, this.navElements);
        this.arrowsHandler(this.sliderContainer);
        this.getCurrentSlide();
    },

    navElements: document.querySelectorAll(".slider__navigation-element"),
    sliderContainer:document.querySelector('.slider__slide-container'),
    slideList:document.querySelector('.slider__slide'),

    setActiveNav: function (container, list) {
        let slide = slider.getCurrentSlide();

        [...list].forEach((element) => {
            element.addEventListener('click', () => {
                let previousSectionName = slider.excludeSectionName(slider.getCurrentSlide(), 'slider__slide--'),
                    previousSectionNumber = slider.idToNumber(previousSectionName);
                
                [...list].forEach((element) => {
                    element.classList.remove("slider__navigation-element--active");
                });

                element.classList.add("slider__navigation-element--active");

                slide = slider.getCurrentSlide();
                let currentSectionName = slider.excludeSectionName(slider.getCurrentSlide(), 'slider__slide--'),
                    currentSectionNumber = slider.idToNumber(currentSectionName), // step is needed to repeat, because current slide is changed after adding active class
                    offsetNumber = (previousSectionNumber - currentSectionNumber)*slide.offsetWidth;

                    container.scrollLeft += offsetNumber;

                console.log(previousSectionNumber, currentSectionNumber);
            });
        });
    },

    arrowsHandler: function (container) {
        let slide = slider.getCurrentSlide();

        document.querySelector('.slider__arrow--right').addEventListener('click',()=>{
            
            container.scrollLeft += slide.offsetWidth;
        });

        document.querySelector('.slider__arrow--left').addEventListener('click',()=>{
            
            container.scrollLeft -= slide.offsetWidth;
        });
    },

    getCurrentSlide: function () {
        let activeTab = document.querySelector('.slider__navigation-element--active'),
            slideName = slider.excludeSectionName(activeTab.querySelector('.slider__navigation-element-icon'), 'slider__navigation-element-icon--'),
            slide = document.querySelector('.slider__slide--' + slideName);

        return slide;
    },

    excludeSectionName: function (element, className) {
       return element.classList[1].replace(className, '');
    },

    idToNumber: function(id) {
        let number;
        switch(id){
            case "panty":
                number = 0;
            break;
            case "socks":
                number = 1;
            break;
            case "bra":
                number = 2;
            break;
            case "jeans":
                number = 3;
            break;
        }
        return number;
    },

    resetPosition: function (element) {
        element.classList.remove('slider__slide-move-right');
        element.classList.remove('slider__slide-move-left');
    },

    findElement: function (element, className) {
        return element.parentNode.parentNode.classList.contains(className);
    },

    containClass: function (element ='document', className) {
        return element.querySelector(className);
    }
};

slider.init();