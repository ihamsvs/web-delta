const Contacto = () => {
  return (
    <article className=" max-w-xs p-6 bg-destacar border border-destacar rounded-lg shadow my-4 relative mx-auto">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-fondo">
        Te gustaron nuestros servicios?
      </h5>
      <p className="font-normal text-fondo text-base">
      Transformamos ideas en éxito digital. ¿Impresionado? ¡Hablemos!
      </p>
      <button className="w-full bg-contraste py-2 rounded-md mt-4">
        <a href="/formulario" className="text-text text-base">
            Contactanos
        </a>
      </button>
    </article>
  );
};

export default Contacto;
