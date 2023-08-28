import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="text-white py-4 bg-fondo">
      <div className="container px-8 flex items-center justify-end">
        <ul className="flex space-x-5">
          <li>
            <Link
              href="/"
              className="text-2xl uppercase font-medium text-text hover:text-enlaces tracking-wider transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="servicios"
              className="text-2xl uppercase  font-medium text-text hover:text-enlaces tracking-wider transition-colors"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="tv"
              className="text-2xl uppercase  font-medium text-text hover:text-enlaces tracking-wider transition-colors"
            >
              TV Online
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
