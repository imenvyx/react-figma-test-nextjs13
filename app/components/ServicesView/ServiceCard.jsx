"use client";

import React, { useState } from "react";
import IconMobile from "../../../public/images/Mobile";
import IconDataCC from "../../../public/images/DataCC";
import IconConfig from "../../../public/images/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

function IconVariant({ variant, fill = "#2E53A3", className }) {
  console.log(className);
  if (variant === "mobile")
    return <IconMobile className={`mb-[14px] ${className}`} fill={fill} />;
  else if (variant === "data_config")
    return <IconDataCC className={`mb-[14px] ${className}`} fill={fill} />;
  else return <IconConfig className={`mb-[14px] ${className}`} fill={fill} />;
}

function ServiceCard({ service }) {
  const { icon, title, description, link } = service;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col transition-colors p-[8%] w-[78%] h-[366px] shadow-[0_0_14px_0_rgba(11,27,0,0.10)]  ${
        hover ? "bg-[#2E53A3]" : "bg-[#fff]"
      }`}
    >
      <IconVariant
        className="h-[95.299px] w-[95.317px]"
        variant={icon}
        fill={hover ? "#FFF" : "#2E53A3"}
      />
      <h4
        className={`text-[#0F0F0F] mb-[14px] font-semibold leading-[124.523%] ${
          hover && "text-white"
        }`}
      >
        {title}
      </h4>

      <p className="text-[#B7B7B7]  mb-[14px] text-[14px]  leading-[124.523%]">
        {description}
      </p>
      <div
        className={`text-white ${hover ? "inline-flex flex-row" : "hidden"}`}
      >
        <a href={link} target="_blank" rel="noreferrer">
          Leer Más <FontAwesomeIcon icon={faGreaterThan} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
