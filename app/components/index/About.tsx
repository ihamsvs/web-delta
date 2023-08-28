import React from "react";
import MainService from "../servicios/MainService";
import Links from "../globals/Links";

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col justify-center">
        <section className="w-full mb-16 relative overflow-hidden">
          <img
            src="/hero-image.webp"
            className="h-96 w-full object-cover object-center rounded-lg shadow-md  transition-transform duration-300 transform scale-125 cursor-none hover:scale-100"
            alt="Hero"
          />
        </section>
        <MainService />
        <Links />
      </div>
    </div>
  );
};

export default About;
