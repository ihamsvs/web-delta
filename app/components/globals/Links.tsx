import Link from "next/link";


const Links = () => {
  return (
    <div className="flex flex-row mx-6 gap-4">
      <Link href='about' className="text-destacar uppercase text-xl cursor-pointer">SOMOS</Link>
      <Link href='gallery' className="text-destacar uppercase text-xl cursor-pointer">GALERIA</Link>
      <Link href='formulario' className="text-destacar uppercase text-xl cursor-pointer">CONTACTO</Link>
      <Link href='staff' className="text-destacar uppercase text-xl cursor-pointer">STAFF</Link>
    </div>
  );
};

export default Links;
