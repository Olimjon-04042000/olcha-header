import { Swiper, SwiperSlide } from 'swiper/react';

const MySwiper = () => {
  const swiperParams = {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <Swiper {...swiperParams}>
      <Swiper-Slide>
        <img src="https://olcha.uz/image/original/sliders/ru/c1lBPgoshZuCwRyVfkWKxh3J03EzknQdOqNW9Hx1JGAmPsNqydGPCoQnWD2l.png" alt=""/>
      </Swiper-Slide>
      <Swiper-Slide>
        <div><img src="https://olcha.uz/image/original/sliders/oz/sH2cyvYl2BqmUQu5srVpMoGJUxLZd8EqxmfQR6m7sjYRJ0PtKNt5UfSHUI7b.jpg" alt="" /></div>
      </Swiper-Slide>
      <Swiper-Slide>
        <div><img src="https://olcha.uz/image/original/sliders/ru/etALz7NufgJ8sFKv7ZZgJJPIbCk3ka6pnDQt5brev1etacWH3Vvfl6Xuxa8Q.png" alt="" /></div>
      </Swiper-Slide>
    </Swiper>
  );
};

export default MySwiper;
