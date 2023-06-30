import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Images

import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const links = [
  { id: 1, title: "home", to: "#" },
  { id: 2, title: "services", to: "#services" },
  { id: 3, title: "aboutUs", to: "#about-us" },
  { id: 4, title: "tools", to: "#" },
  { id: 5, title: "partners", to: "#" },
];

function Navbar() {
  const t = useTranslations("Navigation");
  return (
    <nav className="flex justify-around items-center flex-wrap max-w-[90vw] h-[86px] bg-[#FFF] m-[auto] rounded-lg shadow-[0_4px_35px_0_rgba(0, 0, 0, 0.39)]">
      <div className="lg:w-[60%]">
        <FontAwesomeIcon icon={faBars}  className="inline-block w-12 h-10 lg:hidden"/>
        <ul className="hidden lg:flex lg:flex-row lg:justify-evenly  content-center uppercase text-[#000] text-center text-[16px] text-[Inter] leading-[135.523%]">
          {links.map((link) => (
            <li key={link.id} className="hover:text-[#2E53A3]">
              <a href={link.to}>{t(link.title)}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-[20px]   items-center ">
        <button className="w-[175px] h-[49px] shrink-0 rounded-[56px] bg-[#2D509E] shadow-[4px_4px_22px_0_#709DDA] text-[#FFF] text-center text-[20px] text-[Inter] font-semibold leading-[135.523%] tracking-[0.4px]">
          {t("contact")}
        </button>
        <div className="w-27px h-18px">
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
