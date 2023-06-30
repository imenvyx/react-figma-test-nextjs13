import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

//Images
import Img1 from "../../../public/images/collage/90.png";
import Img2 from "../../../public/images/collage/91.png";
import Img3 from "../../../public/images/collage/92.png";
import Img5 from "../../../public/images/collage/93.png";
import Img4 from "../../../public/images/collage/94.png";

import "./about-us.css";

import ListServices from "./ListServices";
function AboutUs() {
  const t = useTranslations("AboutUs");
  return (
    <section
      id="about-us"
      className=" lg:h-[722px] flex flex-col lg:flex-row justify-center items-center w-[90vw] xl:w-[80vw] mx-auto"
    >
      <div className="aboutUs-left w-full lg:w-[55%]  flex  justify-center">
        <div className="w-[553px] h-[545px]" id="img-canvas">
          <div className="relative">
            <div className="relative grid grid-cols-[repeat(auto-fill, minmax(100px, 1fr))] gap-4 z-20">
              <div id="image-collage" className="col-end-2  row-[1/3]">
                <Image src={Img1} alt=""   />
              </div>
              <div id="image-collage" className="col-start-2 col-span-2  ">
                <Image src={Img2} alt="" />
              </div>
              <div id="image-collage" className="col-start-2 row-[2/2] ">
                <Image src={Img3} alt="" />
              </div>
              <div id="image-collage" className="col-start-3 row-[2/4]">
                <Image src={Img4} alt=""  />
              </div>
              <div id="image-collage" className="col-[1/3]">
                <Image src={Img5} alt=""  />
              </div>
            </div>
            <div className="absolute -top-[24px] -left-[24px] w-[15vw] sm:h-[346px] h-[25vw] sm:w-[198px] max-w-[198px]  max-h-[346px] rounded-[10px] bg-[#2E53A3]"></div>
            <div className="absolute -bottom-[24px] -right-[24px] w-[15vw] h-[25vw] sm:h-[346px] sm:w-[198px] max-w-[198px] max-h-[346px] rounded-[10px] bg-[#2E53A3]"></div>
          </div>
        </div>
      </div>
      <div className="aboutUs-right my-[10%]  lg:w-[40%] text-right lg:pl-[5%]">
        <h2 className="text-[#3A67CC] mb-[18px]  font-bold leading-[135.523%] uppercase ">
          Sobre nosotros
        </h2>
        <h3 className="text-[#0F0F0F] mb-[18px]  font-semibold leading-[124.523%]">
          {t("title")}
        </h3>
        <p className="text-[#2C2C2C] mb-[18px]  font-light leading-[142.523%]">
          Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender
          la arquitectura de componentes de React. Debe tener buena atención al
          detalle, organización del código, habilidades de comunicación efectiva
          y capacidad para trabajar en equipo.
        </p>
        <h4 className="text-[#606060] mb-[18px] text-right   font-bold leading-[124.523%]">
          Usa Context para acceder a los títulos de abajo desde la sección
          anterior
        </h4>
        <ListServices />
      </div>
    </section>
  );
}

export default AboutUs;
