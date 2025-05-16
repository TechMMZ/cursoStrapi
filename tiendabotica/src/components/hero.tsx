'use client';

import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export default function Hero({ title, description, image }: HeroProps) {
  return (
    <section className="bg-[#0c1120] text-white flex flex-col md:flex-row items-center justify-between px-10 py-16 relative overflow-hidden">
      <div className="max-w-lg z-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-400 mb-6">{description}</p>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
          Show categories →
        </button>
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0 z-10">
        <div className="relative w-52 h-96 transform rotate-[-15deg]">
          <Image
            src={image}
            alt="Producto destacado"
            fill
            className="object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0" />
    </section>
  );
}