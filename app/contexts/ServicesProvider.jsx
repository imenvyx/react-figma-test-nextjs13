"use client";
import { React, createContext, useContext, useState } from "react";

const ServicesContext = createContext([]);

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error();
  }
  return context;
}

export default function ServicesProvider({ children }) {
  const [services, setServices] = useState([]);
  const value = [services, setServices];
  return (
    <ServicesContext.Provider value={value}>
      {children}
    </ServicesContext.Provider>
  );
}
