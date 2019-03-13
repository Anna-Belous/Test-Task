let slider = {

    init: function () {
        //this.showRespond(this.answerButtons);
        this.setActiveNav(this.navElements);
        //this.scrollAnswer(this.navElements, this.answerContainer);
        this.scrollNav(this.sliderContainer, this.slideList);
    },

    navElements: document.querySelectorAll(".slider__navigation-element"),
    sliderContainer: document.querySelector('.slider'),
    slideList: document.querySelector('.slider__slide'),

    setActiveNav: function (list) {
        [...list].forEach((element) => {
            element.addEventListener('click', () => {

                [...list].forEach((element) => {
                    element.classList.remove("slider__navigation-element--active");
                });

                element.classList.add("slider__navigation-element--active")
            });
        });
    }

    // addHeightElemen:function(element){
    //     element.style.minHeight=element.getBoundingClientRect().height+'px';
    // },
    // deleteHeightElemen:function (element) {
    //     element.parentNode.parentNode.style.minHeight='100px';
    // },

    // getHref : function (elem) {
    //   return elem.querySelector(".faq__navigation-link").href
    // },

    // scrollAnswer : function (list, container) {
    //     const answerSections  = document.querySelectorAll(".faq-answer__header");
    //     [...list].forEach((element) => {
    //         element.addEventListener('click', () => {
    //             [...answerSections].forEach((answerElement) => {
    //                 if (this.getHref(element).split('#')[1] === answerElement.id) {
    //                     if ( window.innerWidth > 1130 ) {
    //                         targetScrollVerticalToElement(container, answerElement.parentElement, 354);
    //                     }
    //                     if ( window.innerWidth < 768 ) {
    //                         targetScrollVerticalToElement(container, answerElement.parentElement, 248);
    //                     }
    //                     else  if ( (window.innerWidth >= 768)&&( window.innerWidth <= 1130 ) ){
    //                         targetScrollVerticalToElement(container, answerElement.parentElement, 407);
    //                     }
    //                 }
    //             });
    //         });
    //     });
    // },

    scrollNav : function (container, tab) {
        document.querySelector('.slider__arrow--right').addEventListener('click',()=>{
            container.scrollLeft += tab.offsetWidth;
        });

        document.querySelector('.slider__arrow--left').addEventListener('click',()=>{
            container.scrollLeft -= tab.offsetWidth;
        });
    },

    containClass : function (element, className) {
        return element.parentNode.parentNode.classList.contains(className);
    }
};

slider.init();