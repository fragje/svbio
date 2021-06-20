import Swiper from 'swiper';
import SwiperCore, { Navigation, Autoplay} from 'swiper/core';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Autoplay, ]);

document.addEventListener('DOMContentLoaded', function () {
	// eslint-disable-next-line no-unused-vars
	const swiper = new Swiper('.swiper-container', {
		loop: true,
		autoHeight: true,
		autoplay: {
			delay: 3000,
		},
	});
});
