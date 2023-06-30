"use client";
import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

import { useServices } from "@/app/contexts/ServicesProvider";

/* eslint-disable import/no-unresolved */

// Import Swiper React components

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper-styles.css";

// import required modules
/* import { Pagination, Navigation } from "./Swiper"; */
import ServiceCard from "./ServiceCard";
function SwiperServicies() {
  const [services, setServices] = useServices();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "•" + "</span>";
    },
  };

  useEffect(() => {
    fetch("https://react-frontend.pages.dev/slides.json")
      .then((resp) => resp.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Swiper
      navigation={true}
      pagination={pagination}
      slidesPerView={"auto"}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        854: {
          slidesPerView: 2,
        },
        1024:{
          slidesPerView: 1,
        },
        1360:{
          slidesPerView: 2,
        }
      }}
      
      modules={[Pagination, Navigation]}
      className="swiper-servicies"
    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          <ServiceCard service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperServicies;
