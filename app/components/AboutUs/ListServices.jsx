"use cliente";
import React from "react";
import { useServices } from "../../contexts/ServicesProvider";

function ListServices() {
  const [services] = useServices();
  return (
    <div className="flex flex-col items-end">
      {services.map((service) => (
        <p
          key={service.id}
          className="inline-flex flex-row items-center mb-[18px] text-[#606060] text-right text-[16px] font-medium "
        >
          {service.title}
          <span className=" ml-8 w-[20px] h-[20px] text-center  leading-[18px] text-[18px]   text-[#007aff]  opacity-1 bg-[#fff] rounded-full border-2 border-[#3D93FF]">
            •
          </span>
        </p>
      ))}
    </div>
  );
}

export default ListServices;
