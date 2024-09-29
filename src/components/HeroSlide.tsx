import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import columbus from "../assets/imgs/columbus.jpg";
import jamestown from "../assets/imgs/jamestown.jpg";
import plantation from "../assets/imgs/plantation.jpg";
import spanish from "../assets/imgs/spanish-invasion.jpg";
import "../css/HeroSlide.css";

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
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/1"
            onClick={() => window.scrollTo(0, 0)}
          >
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/2"
            onClick={() => window.scrollTo(0, 0)}
          >
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/3"
            onClick={() => window.scrollTo(0, 0)}
          >
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/4"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${plantation})`,
                backgroundPosition: "center",
              }}
            >
              <div className="slide-content">
                <h1>Triangular Trade: 16th to 19th centuries</h1>
                <p>
                  The triangular trade involved the exchange of slaves, raw
                  materials, and manufactured goods between Africa, the
                  Americas, and Europe.
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlide;
