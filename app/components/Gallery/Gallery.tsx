import React from 'react'
import Links from '../globals/Links'

interface GalleryItem {
    url: string;
    alt: string;
    instagram?: string
}

const GALLERY : GalleryItem[]  = [
    {
        "url": "/expo-revive.webp",
        "alt": "expo-revive",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    },
    {
        "url": "/gallery1.webp",
        "alt": "expo-revive",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    },
    {
        "url": "/gallery3.webp",
        "alt": "expo-revive",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    },
    {
        "url": "/gallery4.jpg",
        "alt": "el mañanero",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    },
    {
        "url": "/gallery5.webp",
        "alt": "el mañanero",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    },
    {
        "url": "/gallery6.webp",
        "alt": "el mañanero",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    },
    {
        "url": "/gallery7.jpg",
        "alt": "el mañanero",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    },
    {
        "url": "/gallery9.jpg",
        "alt": "el mañanero",
        "instagram": "https://www.instagram.com/circulodelta.cl/"
    }
]

export default function Gallery() {
  return (
    <section className='min-h-screen w-full'>
        <h3 className='capitalize text-3xl text-text font-semibold text-center'>Galeria de eventos</h3>
        <aside className='grid grid-cols-4 mx-4 my-4'>
            {GALLERY.map((gallery)=>(
            <article className='col-span-1 max-w-xs max-h-80 my-4' key={gallery.alt}>
                <a href={gallery.instagram} target='_blank'>
                <img src={gallery.url} className='w-auto h-auto rounded-sm' alt={gallery.alt}></img>
                </a>
            </article>
            ))}
            
        </aside>
        <footer className="my-4">
        <Links/>
      </footer>
    </section>
  )
}
