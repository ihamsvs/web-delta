import React from "react";
import Contacto from "./Contacto";

const IndexService = () => {
  return (
    <div className="min-h-screen">
      <h5 className="text-5xl font-bold text-center text-text mt-8">
        Nuestros Servicios
      </h5>
      <section className="flex flex-col md:flex-row items-center my-8 justify-center">
        <article className="md:mr-8 mb-4 md:mb-0 relative overflow-hidden  ">
          <img
            src="/laptop2.jpg"
            alt="Laptop"
            className="max-w-lg rounded-lg transition-transform duration-300 transform hover:scale-125 "
          />
        </article>
        <article>
          <p className="text-text max-w-xs">
            Somos Circulo Delta / Agencia de Servicios Digitales &
            Publicitarios: SERVICIOS PARA CAMPAÑAS ➜ Publicidad & Propaganda ➜
            Diseños, Impresos, Fotografía, Letreros ➜ Marketing Digital ➜
            Streaming, Podcast, Producción, Edición ➜ Servicios Para Eventos ➜
            Redes Sociales, Gestión de Medios, Prensa ➜ Asesoría. Digitalizamos
            tu negocio, llegamos donde debes estar, a un Click!
          </p>
        </article>
      </section>
      <Contacto />
    </div>
  );
};

export default IndexService;
