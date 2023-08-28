import React from "react";

const MainService = () => {
  return (
    <div className="">
      {/* Navbar */}
      {/* Puedes insertar aquí tu componente de Navbar */}

      {/* Servicios Section */}
      <section id="servicios" className="py-16  text-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:bg-destacar transition-all cursor-pointer">
              {/* Icono del servicio */}
              <svg
                className="w-12 h-12 text-blue-500 mx-auto mb-4 text-text"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>

              <h3 className="text-xl font-semibold mb-2 text-text">
                Producción de Eventos
              </h3>
              <p className="text-text capitalize">
                Banquetería, Mobiliario, Ambientación, Decoración, Espectáculos,
                Sonido, Iluminación ¡y mucho más! Confía en nuestro equipo
                experto para hacer de tu ocasión un éxito inolvidable.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:bg-interactivos transition-all cursor-pointer">
              {/* Icono del servicio */}
              <svg
                className="w-12 h-12 text-blue-500 mx-auto mb-4 text-text"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>

                {/* Inserta aquí el código del icono */}
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-text">
                Diseño e impresión
              </h3>
              <p className="text-text capitalize">
                Páginas Web, Letreros, Comics, Gráficas, 3D, Arte, Grafitis,
                Impresión, PVC y Merchandising para llevar tu marca a otro nivel
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:bg-resaltar transition-all cursor-pointer">
              {/* Icono del servicio */}
              <svg
                className="w-12 h-12 text-blue-500 mx-auto mb-4 text-text"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                  />
                </svg>

                {/* Inserta aquí el código del icono */}
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-text">
                Producción Audiovisual
              </h3>
              <p className="text-text capitalize">
                Programas TV/Online, Streaming, Podcasts, Fotografía, Producción
                Audiovisual y Spots Publicitarios
              </p>
            </div>

            {/* Servicio 4 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:bg-acciones transition-all cursor-pointer">
              {/* Icono del servicio */}
              <svg
                className="w-12 h-12 text-blue-500 mx-auto mb-4 text-text"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>

                {/* Inserta aquí el código del icono */}
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-text">Campañas</h3>
              <p className="text-text capitalize">
                eventos de lanzamientos, encuestas estratégicas, impresos
                tradicionales presenciales, redes sociales, gestión completa
                online y offline, difusión en medios de prensa
              </p>
            </div>
            {/* Servicio 5 */}
            <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 hover:bg-enlaces transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-blue-500 mx-auto mb-4 text-text"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>

              <h3 className="text-xl font-semibold mb-2 text-text">
                TV ONLINE
              </h3>
              <p className="text-text capitalize">
                El Mañanero Ciudadano abarca una amplia gama de formatos,
                TV/Online, transmisiones en streaming,
                podcasts, fotografía, producción audiovisual, spots
                publicitarios
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ... */}
    </div>
  );
};

export default MainService;
