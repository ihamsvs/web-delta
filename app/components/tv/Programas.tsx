import React from "react";

const Programas = () => {
  return (
    <section className="relative mx-auto flex justify-center items-center">
  <div className="grid grid-cols-3 gap-4">
    <div className="col-span-2">
      {/* Contenido de las dos primeras columnas */}
      <div className="bg-gray-200 p-4 text-text">
        <article className="">
          <p>Media partners</p>
          <div className="max-w-xs">
            <img src="https://static.wixstatic.com/media/527313_cf1747e273484eadb1341e0f8de6e9ff~mv2.gif" alt="Media partners" />
          </div>
        </article>
      </div>
      <div className="bg-gray-200 p-4 text-text">
        <article className="">
          <p>Nuestros Programas</p>
          <div className="max-w-xs">
            <img src="https://static.wixstatic.com/media/527313_75623e08894348ac8fc97a25b9170e84~mv2.gif" alt="Nuestros Programas" />
          </div>
        </article>
      </div>
    </div>

  </div>
</section>

  );
};

export default Programas;
