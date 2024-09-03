// Inicialización del primer Swiper
var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", // Corrección aquí
        prevEl: ".swiper-button-prev", // Corrección aquí
    },
    on: {
        init: function () {
            if (this.slides.length <= this.params.slidesPerView) {
                console.warn('Swiper Loop Warning: No hay suficientes diapositivas para el modo de bucle en mySwiper-1.');
            }
        }
    }
});

// Inicialización del segundo Swiper
var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next", // Corrección aquí
        prevEl: ".swiper-button-prev", // Corrección aquí
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 2,
        }
    },
    on: {
        init: function () {
            if (this.slides.length <= this.params.slidesPerView) {
                console.warn('Swiper Loop Warning: No hay suficientes diapositivas para el modo de bucle en mySwiper-2.');
            }
        }
    }
});

// Asignación de eventos a los inputs de tabulación
let tabInputs = document.querySelectorAll(".TabInput");

tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        // Cambiar ariaValueMax a 'data-swiper-id' si es necesario
        let id = input.getAttribute('data-swiper-id'); // Usa el atributo correcto
        console.log('ID del Swiper:', id); // Depuración

        let swiperElement = document.getElementById(id);
        if (swiperElement) {
            console.log('Elemento del Swiper encontrado:', swiperElement); // Depuración

            // Verifica si la instancia de Swiper está disponible
            if (swiperElement.swiper) {
                console.log('Instancia de Swiper encontrada:', swiperElement.swiper); // Depuración
                swiperElement.swiper.update();
            } else {
                console.error('Instancia de Swiper no encontrada en el elemento:', swiperElement); // Depuración
            }
        } else {
            console.error('Elemento del Swiper no encontrado con ID:', id); // Depuración
        }
    });
});
