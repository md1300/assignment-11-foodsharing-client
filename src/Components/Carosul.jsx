// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import bg image -----------
import bgImg1 from "../assets/image/carosul1.jpg"
import bgImg2 from "../assets/image/carosul2.jpg"
import bgImg3 from "../assets/image/carosul3.jpg"


// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Carosul = () => {
    return (
        <div  className='container px-6 py-1o mx-auto'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
           delay: 4000,
           disableOnInteraction: false,
         }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><Slide image={bgImg1} text='Feeding the hungry is a responsibility we all share. Together, we can make a difference.'/></SwiperSlide>
          <SwiperSlide><Slide image={bgImg2} text='Hunger knows no borders, and neither should our compassion' /></SwiperSlide>
          <SwiperSlide><Slide image={bgImg3} text='Every meal shared brings us one step closer to ending hunger.' /></SwiperSlide>
          
         
        
        </Swiper>
   </div>
    );
};

export default Carosul;