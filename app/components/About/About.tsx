import Links from "../globals/Links";

const About = () => {
  return (
    <div className="h-full w-full">
      <section className="grid grid-cols-2 gap-4">
        <article className="col-span-1">
          <img src="/hero.jpg" alt="hero" className="rounded-xl px-4" />
        </article>
        <article className="col-span-1">
          <p className="text-text text-base text-left">
            Agencia Digital Circulo Delta: Descubre nuestro show online, El
            Mañanero Ciudadano. Disfrútalo en nuestro sitio y redes. ¡Somos tu
            ventana digital con programas variados! Investigación y creatividad
            al servicio de tu comunicación y marketing. 🚀📺🌐
          </p>
          <section>
            <article className="flex flex-col items-center py-4">
              <div className="my-4">
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-white border bg-contraste border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-text  dark:text-white">
                    MISIÓN
                  </h5>
                  <p className="font-normal text-text  dark:text-gray-400">
                    Ser delta en cobertura, en el mundo físico y virtual,
                    logrando ser un servicio a su disposición en comunicación e
                    investigación
                  </p>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="block max-w-sm p-6 bg-contraste border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-text dark:text-white">
                    VISIÓN
                  </h5>
                  <p className="font-normal text-text dark:text-gray-400">
                    Ocupar la investigación creativa, para desempeñar acciones
                    estratégica, según la necesidad de cada uno de nuestros
                    clientes y asociados
                  </p>
                </a>
              </div>
            </article>
          </section>
        </article>
      </section>
      <footer className="my-4">
        <Links/>
      </footer>
    </div>
  );
};

export default About;
