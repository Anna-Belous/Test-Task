const panty = {

    init: function () {
        common.renderElements(this.pantyProductlist_woman, this.containerWoman);
        common.renderElements(this.pantyProductlist_children, this.containerChildren);
        console.log('panty');
    },

    containerWoman: document.querySelector('.product__container--panty-woman'),
    containerChildren: document.querySelector('.product__container--panty-children'),

    pantyProductlist_woman: {
        product1: {
            product_code: 0803501,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/panty-hoses/panty-1.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет серый',
            size: ['s', 'm', 'l', 'xl'],
            color: 'gray'
        },
        product2: {
            product_code: 08035085,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-11.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет черный',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product3: {
            product_code: 08035068,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-12.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет телесный',
            size: ['s', 'm', 'l', 'xl'],
            color: ''
        },
        product4: {
            product_code: 08035358,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-2.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет бронз',
            size: ['s', 'm', 'l', 'xl'],
            color: 'bronze'
        },
        product5: {
            product_code: 08035638,
            ating: 5,
            img: '../../images/panty-hoses/panty-3.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет серый',
            size: ['s', 'm', 'l', 'xl'],
            color: 'grey'
        },
        product6: {
            product_code: 08035442,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-4.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет черный',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product7: {
            product_code: 08035558,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-5.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет белый',
            size: ['s', 'm', 'l', 'xl'],
            color: 'white'
        },
        product8: {
            product_code: 08035005,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-6.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Колготки, Conte Elegant 20 Den, цвет бронз',
            size: ['s', 'm', 'l', 'xl'],
            color: 'bronze'
        },
        product9: {
            product_code: 08035571,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/panty-hoses/panty-7.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: 'new',
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'bronze'
        },
        product10: {
            product_code: 08035840,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-8.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: 'new',
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'bronze'
        },
        product11: {
            product_code: 080350967,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-9.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: 'new',
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'bronze'
        }
    },

    pantyProductlist_children: {
        product1: {
            product_code: 0803501,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-1.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product2: {
            product_code: 08035085,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-10.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product3: {
            product_code: 08035068,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-11.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product4: {
            product_code: 08035358,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-2.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product5: {
            product_code: 08035638,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-3.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product6: {
            product_code: 08035442,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-4.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product7: {
            product_code: 08035558,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-5.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product8: {
            product_code: 08035005,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-6.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product9: {
            product_code: 08035571,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-7.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product10: {
            product_code: 08035840,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-8.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        },
        product11: {
            product_code: 080350967,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/panty-hoses/panty-baby-9.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'multiple'
        }
    }
}

panty.init();