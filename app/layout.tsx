import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../app/components/globals/Navbar'
import Footer from './components/globals/Footer'

export const metadata: Metadata = {
  title: 'Circulo Delta',
  description: 'Empresa enfocada a los servicios digitales y con su propia TV online'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className='bg-fondo'>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
