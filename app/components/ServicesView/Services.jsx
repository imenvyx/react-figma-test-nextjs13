import React from "react";
import SwiperServices from "./SwiperServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default async function Services() {
  return (
    <section id="services" className="h-auto my-16  lg:m-0 lg:h-[722px] w-full">
      <div className=" w-[85vw] lg:w-[80vw] h-full flex flex-col lg:flex-row  items-center mx-auto">
        <div className="services-left w-full mb-6 lg:w-[40%] lg:pr-[2%]">
          <h2 className="text-[#3A67CC] mb-[18px]  font-bold leading-[135.523%] uppercase ">
            Servicios
          </h2>
          <h3 className="text-[#0F0F0F] mb-[18px] font-semibold leading-[124.523%]">
            Esta info te llega desde un servicio externo
          </h3>
          <p className="text-[#2C2C2C] mb-[18px]  font-light leading-[142.523%]">
            Consultando el servicio en
            https://react-frontend.pages.dev/slides.json, debes usar Context
            para enviar los datos que necesitas en la sección de abajo. A la
            derecha tiene un slide o carrusel.
          </p>
          <button className="group w-[175px] h-[49px] shrink-0 rounded-[56px] bg-[#2D509E] shadow-[4px_4px_22px_0_#709DDA]  text-[#FFF] text-center text-[20px] font-semibold leading-[135.523%] tracking-[0.4px] ">
            Ver más{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className=" transition ease-in-out  group-hover:last:translate-x-1"
            />
          </button>
        </div>
        <div className="services-right w-screen lg:w-[68%] h-[500px] flex items-center ">
          <SwiperServices />
        </div>
      </div>
    </section>
  );
}
