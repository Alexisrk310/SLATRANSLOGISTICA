'use client';
import BrandsCarousel from '@/components/BrandsCarousel';
import Waves from '@/components/Waves';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Image from 'next/image';
const brands = [
	{ id: 'brand1', src: '/slatranslogistica-logo.png', alt: 'Brand 1' },
	{ id: 'brand2', src: '/slatranslogistica-logo.png', alt: 'Brand 2' },
	{ id: 'brand3', src: '/slatranslogistica-logo.png', alt: 'Brand 3' },
	{ id: 'brand4', src: '/slatranslogistica-logo.png', alt: 'Brand 4' },
	{ id: 'brand5', src: '/slatranslogistica-logo.png', alt: 'Brand 5' },
	{ id: 'brand6', src: '/slatranslogistica-logo.png', alt: 'Brand 5' },
	{ id: 'brand7', src: '/slatranslogistica-logo.png', alt: 'Brand 5' },
	{ id: 'brand8', src: '/slatranslogistica-logo.png', alt: 'Brand 5' },
	{ id: 'brand9', src: '/slatranslogistica-logo.png', alt: 'Brand 5' },
	{ id: 'brand10', src: '/slatranslogistica-logo.png', alt: 'Brand 5' },
	{ id: 'brand11', src: '/slatranslogistica-logo.png', alt: 'Brand 5' },
];

export default function Home() {
	return (
		<>
			<div className="w-full flex items-center justify-around bg-[#38bdf8] text-white p-10">
				<Image
					src={'/carro-container.jpg'}
					alt="Logo"
					width={350}
					height={350}
					className="rounded-full  h-1/2 object-cover"
				/>
				<p className="text-center w-1/2 text-2xl">
					Nuestra empresa se especializa en ofrecer soluciones integrales de
					transporte para personas y mercancías, garantizando puntualidad,
					seguridad y eficiencia en cada servicio. Contamos con una flota
					moderna y personal capacitado que asegura el cumplimiento de los más
					altos estándares de calidad.
				</p>
			</div>
			<Waves />
			<h1 className="text-4xl text-center font-bold text-sky-400">
				NUESTROS ALIADOS
			</h1>
			<BrandsCarousel brands={brands} />
			<WhatsAppWidget />
		</>
	);
}
