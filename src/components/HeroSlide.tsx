import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import columbus from "../assets/imgs/columbus.jpg";
import jamestown from "../assets/imgs/jamestown.jpg";
import spanish from "../assets/imgs/spanish-invasion.jpg";
import "../css/HeroSlide.css"; // Your custom styles

const HeroSlide: React.FC = () => {
  return (
    <section className="hero-swiper-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${columbus})` }}
          >
            <div className="slide-content">
              <h1>The New World: 1492</h1>
              <p>
                Christopher Columbus, an Italian explorer sponsored by the
                Spanish Crown, set sail in 1492 and discovered the Americas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${spanish})`,
            }}
          >
            <div className="slide-content">
              <h1>Spanish Invasion: 1519-1521</h1>
              <p>
                The Spanish conquest of the Mexica was a long, difficult, and
                contested process that took over two years, 1519–1521.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${jamestown})`,
              backgroundPosition: "center",
            }}
          >
            <div className="slide-content">
              <h1>Founding of Jamestown: 1607</h1>
              <p>
                The colonization of Jamestown in 1607 marked the beginning of
                permanent English settlement in mainland North America.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlide;
