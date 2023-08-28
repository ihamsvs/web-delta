import React from "react";
import Programas from "./Programas";

const AboutTv = () => {
  return (
    <div className="min-h-screen">
      <section className="grid grid-cols-2">
        <article className="col-span-1 max-w-xs mx-auto my-4">
          <img src="/logotv.webp" alt="logo-tv" />
        </article>
        <article className="col-span-1 max-w-sm py-4">
          <p className="text-text text-base">
            El <span className="text-interactivos font-semibold">MAÑANERO</span> <span className="text-resaltar font-semibold">CIUDADANO</span>: Es una una vitrina digital y una óptica
            ciudadana, cada mañana, contamos con una parrilla, que concentra
            variados espacios, con propuestas de interés para los viewers,
            registros que se trasforman en programas independientes, que se
            viralizan en redes sociales. Nuestras vitrinas objetivas, son los
            teléfonos móviles, tabletas, notebooks, PC, pagina web y el SmarTV.
            Bienvenido a la nueva era de la televisión online. Dirección &
            Producción: Circulo Delta
          </p>
        </article>
      </section>
      <Programas/>
    </div>
  );
};

export default AboutTv;
