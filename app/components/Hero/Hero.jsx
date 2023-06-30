import React from "react";
import Image from "next/image";

//Images

import HeroImg from "../../../public/images/hero-img.png";
import NumberBackground from "../../../public/images/clip-path-group.png";
import Navbar from "./Navbar";

function Hero() {
  return (
    <>
      <div className="absolute z-10 top-10 h-[86px] w-full ">
        <Navbar />
      </div>
      <div className="relative w-full h-[722px]   bg-[#001853] shadow-[0_4px_35px_0_rgba(0, 0, 0, 0.39);]">
        <Image
          className="absolute aspect-video h-[722px] right-20"
          src={NumberBackground}
          alt=""
        />
        <div className="flex flex-row  h-full">
          <div id="hero-left" className="w-[50%] flex items-center pl-[8%] ">
            <div className="flex flex-col lg:w-[80%] ">
              <h1 className="text-[#fff] text- font-extrabold leading-snug mb-[28px]">
                Es tiempo de maquetar
              </h1>
              <p className="text-[#fff] leading-[135.523%]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam accusamus accusantium eius, harum minima odit. Illo odio
                consequuntur laudantium reprehenderit ipsa corporis nesciunt
                repellat molestiae, recusandae dolorum, a ratione tenetur?
              </p>
            </div>
          </div>
          <div id="hero-right" className="flex w-[50%] relative object-cover">
            <Image
              src={HeroImg}
              alt=""
              className="absolute -bottom-[115px] w-full h-[650px] "
            />
          </div>
        </div>
        <div className=" absolute -bottom-[40px] rounded-xl left-[20%] w-[122px] h-[122px] bg-[#001853] rotate-45"></div>
      </div>
    </>
  );
}

export default Hero;
