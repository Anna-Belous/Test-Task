const common = {

	init: function () {
        this.filterJeans();
    },

    // setElements: () => {
    //     fetch('/api/', {
    //         method: 'GET',
    //         credentials: "same-origin",  //if products will be render by API
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(response => {
    //             common.renderElements(response.data);
    //         });
    // },

    productlist: {
        product1: {
            product_code: 0803501,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-1.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product2: {
            product_code: 08035085,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/jeans-and-leggings/jeans-10.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        },
        product3: {
            product_code: 08035068,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-11.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: 'new',
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product4: {
            product_code: 08035358,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/jeans-and-leggings/jeans-12.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product5: {
            product_code: 08035638,
            individual_page_href: '#',
            rating: 5,
            img: '../../images/jeans-and-leggings/jeans-13.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product6: {
            product_code: 08035442,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-14.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product7: {
            product_code: 08035558,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-15.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product8: {
            product_code: 08035005,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-16.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product9: {
            product_code: 08035571,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-17.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: 'new',
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product10: {
            product_code: 08035840,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-18.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product11: {
            product_code: 080350967,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-2.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'black'
        },
        product12: {
            product_code: 08035173,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-3.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        },
        product13: {
            product_code: 08035937,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-4.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        },
        product14: {
            product_code: 08035479,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-5.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        },
        product15: {
            product_code: 08035297,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-6.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        },
        product16: {
            product_code: 08035745,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-7.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        },
        product17: {
            product_code: 08035346,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-8.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        },
        product18: {
            product_code: 08033124,
            individual_page_href: '#',
            rating: 4,
            img: '../../images/jeans-and-leggings/jeans-9.png',
            price_value: '00.00',
            price_valute: '$',
            indicator_availability: 'green',
            indicator_new: null,
            info_availability: '',
            description: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
            size: ['s', 'm', 'l', 'xl'],
            color: 'blue'
        }
    },

    renderElements: function (data, container) {

        for (let key in data) {
		  container.innerHTML += this.getElementsTemplate(data[key]);
		  common.renderSizeButtons(data[key].size);
		};
    },

    renderSizeButtons: function (sizeList) {
    	const buttonsContainers = document.querySelectorAll('.product__size-button-container');

    	[...buttonsContainers].forEach((container) => {
    		container.innerHTML = "";

            [...sizeList].forEach((size) => {
	            container.innerHTML +=`<button class="product__size-button value="${size}">${size}</button>`;
	            container.parentElement.parentElement.classList.add(size);
	        });
        })
    },

	getElementsTemplate: (product) => {
		return (`<div class="product__element-wrapper">
					<div class="product__element">
						<div class="product__element-top">
							<span class="product__code">${product.product_code}</span>
							<a class="product__link-individual-page product__link-individual-page--rating
							product__link" href="${product.individual_page_href}">
								<div class="product__rating">
									<div class="product__rating-star-container">
										<img class="product__rating-star" src= "../../images/common/rating-star--voted.svg">
										<img class="product__rating-star" src= "../../images/common/rating-star--voted.svg">
										<img class="product__rating-star" src= "../../images/common/rating-star--voted.svg">
										<img class="product__rating-star" src= "../../images/common/rating-star--voted.svg">
										<img class="product__rating-star" src= "../../images/common/rating-star.svg">
									</div>
									<span class="product__rating-value">${product.rating}</span>
								</div>
							</a>
						</div>
						
						<div class="product__concept ${product.color}">
							<a class="product__link-individual-page product__link-individual-page--view product__link" href="#">
								<div class="product__view">
									<img src="${product.img}" class="product__img">
									<div class="product__indicator product__indicator--${product.indicator_availability}"></div>
									<div class="product__indicator product__indicator--${product.indicator_new}">new</div>
								</div>
								<div class="product__description">
									<span class="product__description-text">${product.description}</span>
									<div class="product__price">
										 от <span class="product__price-value">${product.price_value}</span>
										<span class="product__price-valute">${product.price_valute}</span>
									</div>
								</div>
							</a>
							<div class="product__additional-info">
									<span class="product__additional-info-price">
									Вкл. 19% налог, искл.
										<a class="product__link product__link-individual-page--delivery" href="#"><span class="product__additional-info-price--option">
											доставку
										</span></a>
								</div>
							<form class="product__purchase">
								<div class="product__size-button-container">
								</div>

								<input type='hidden' value = "${product.product_code}">

								<button class="product__purchase-button" value="purchase">Добавить в корзину</button>
							</form>
						</div>
					</div>
				</div>
		    `);
	},

    filterJeans: function() {
        const jeansFilters = document.querySelectorAll('.jeans__filter'),
              elementsForFilter = document.querySelectorAll('.product__element-wrapper');

        [...jeansFilters].forEach((filter) => {
            filter.addEventListener("change", function() {
                common.filterHandler(filter, elementsForFilter);
            });
        });
    },

    filterHandler: function (filter, elements) {
        [...elements].forEach((element) => {
            let identical;

            common.resetVisibility(element);

            if(filter.value != 'all') {
                identical = element.querySelector('.product__concept').classList.contains(filter.value);
                
                if (!identical) {
                    element.classList.add('hidden');
                }
            }
        });
    },

    resetVisibility: function (element) {
        element.classList.remove('hidden');
    }
}

common.init();