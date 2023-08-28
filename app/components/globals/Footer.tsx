import SocialMedia from "@/app/components/globals/SocialMedio"
import Link from "next/link"
const Footer = () => {
    return(
        
        
<footer className="bg-contraste rounded-lg shadow  mt-8 w-full">
    <div className=" mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
                <img src="/logoDelta.webp" className="h-12 mr-3" alt="Circulo Delta Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-text">Circulo Delta</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/" className="mr-4 hover:underline md:mr-6 text-text">Sobre Nosotros</Link>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 text-text">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 text-text">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline text-text">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-text">© 2023 <Link href="/" className="hover:underline text-text">Circulo Delta™</Link>. All Rights Reserved.</span>
        <SocialMedia/>
    </div>
</footer>



    )
}

export default Footer