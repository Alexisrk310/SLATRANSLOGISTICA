'use client';
import AvatarCard from '@/components/AvatarCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import Waves from '@/components/Waves';
import WavesTop from '@/components/WavesTop';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Image from 'next/image';
const brands = [
	{ id: 'cy', src: 'brands/cy-colombia.png', alt: 'Logo cy' },
	{ id: 'progan', src: 'brands/progan.png', alt: 'Logo progan' },
	{ id: 'veneplast', src: 'brands/veneplast.jpeg', alt: 'Logo Veneplast' },
	{ id: 'profarm', src: 'brands/profarm.png', alt: 'Logo Profarm' },
	{
		id: 'flexindustrial',
		src: 'brands/flexindustrial.jpeg',
		alt: 'Logo flex industrial',
	},
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

			<WavesTop />
			<div className="w-full flex items-center justify-around bg-[#38bdf8] text-white p-10">
				<Image
					src={'/carro-container.jpg'}
					alt="Logo"
					width={350}
					height={350}
					className="rounded-full  h-1/2 object-cover"
				/>
				<p className="text-center w-1/2 text-2xl">
					Ofrecemos servicios de alta calidad en transporte de carga y
					logística, adaptándonos a las necesidades de nuestros clientes.
					Nuestra misión es proporcionar soluciones eficientes y seguras,
					garantizando la satisfacción del cliente a través de un servicio
					confiable y puntual. Con un equipo profesional y tecnología avanzada,
					nos comprometemos a optimizar cada proceso logístico, asegurando que
					sus cargas lleguen a su destino en perfectas condiciones y a tiempo.
				</p>
			</div>
			<Waves />
			<h1 className="text-4xl my-4 text-center font-bold text-sky-400">
				NUESTROS COLABORADORES
			</h1>
			<div className="flex flex-wrap justify-center gap-8 p-10">
				<AvatarCard
					name="Leonardo Bustos De Avila"
					role="Gerente"
					description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
					imageSrc="/brands/flexindustrial.jpeg"
				/>
				<AvatarCard
					name="Ana Mercedes Reales Valencia"
					role="Coordinadora de operaciones"
					description="Organiza la logistica"
					imageSrc="/brands/flexindustrial.jpeg"
				/>
				<AvatarCard
					name="Alexis Gutierrez Ruiz"
					role="Ingeniero de sistemas"
					description="Conductor"
					imageSrc="/brands/flexindustrial.jpeg"
				/>
			</div>
			<WhatsAppWidget />
		</>
	);
}
