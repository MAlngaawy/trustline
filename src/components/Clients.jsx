import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo1 from "./assets/logo-01.png";
import logo2 from "./assets/logo-02.png";
import logo3 from "./assets/logo-03.png";
import Shape from "./shared/shape";

const data = [logo1, logo2, logo3, logo1, logo3, logo2, logo1];

const Clients = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <div className="my-32 mx-3 md:mx-14 lg:mx-28">
      <div className="header text-right my-16">
        <Shape />
        <h3 className=" font-bold text-3xl my-2"> عملاءنا </h3>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={windowWidth <= 500 ? 1 : windowWidth <= 800 ? 2 : 3}
        navigation={{ clickable: true }}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SlideItem className="m-60" img={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Clients;

const SlideItem = ({ img }) => {
  return (
    <div className="main w-full h-full flex justify-center items-center">
      <div className="p-10 w-40 h-40 lg:w-60 lg:h-60 flex justify-center items-center rounded-3xl bg-boxGray">
        <img className="max-w-full" src={img} alt="client logo" />
      </div>
    </div>
  );
};
