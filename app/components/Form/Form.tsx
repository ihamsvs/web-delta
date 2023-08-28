const Form = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-fondo">
      <div className="w-full max-w-md p-6 bg-contraste rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-text">¡Comienza a Construir tu Futuro Hoy!</h1>

        <p className="text-text mb-6">
        Establece los cimientos para un futuro notable. Cada elección que haces hoy da forma
  al camino hacia la vida extraordinaria que mereces.
        </p>

        <form className="space-y-4">
          <div className="relative">
            <input
              type="email"
              className="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Ingrese su email"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>

          <div className="relative">
            <input
              type="number"
              className="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Ingrese su numero de telefono"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </span>
          </div>
          <div className="relative">
            <textarea
              className="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
              placeholder="Deje su mensaje..."
              rows={6}
            />
            <span className="absolute inset-y-0 right-0 flex items-start pr-4 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <button className="bg-botones px-3 py-1 rounded-xl">
            Enviar
          </button>
          </div>
        </form>
      </div>

    </section>
  );
};

export default Form;
