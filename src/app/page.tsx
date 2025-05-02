'use client';
import AvatarCard from '@/components/AvatarCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import WavesBottom from '@/components/WavesBottom';
import Waves from '@/components/WavesBottom';
import WavesTop from '@/components/WavesTop';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { alliedBrandData } from '@/data/alliedBrandData';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className="w-full flex flex-col-reverse lg:flex-row items-center justify-around bg-[#38bdf8] text-white px-6 py-10 gap-6">
				<Image
					src={'/tractocamion/tractocamion-container-en-via.png'}
					alt="Logo"
					width={700}
					height={700}
					className="rounded-3xl w-full lg:w-1/2 object-cover"
				/>
				<p className="text-center text-lg sm:text-xl md:text-2xl w-full lg:w-1/2">
					Nuestra empresa se especializa en ofrecer soluciones integrales de
					transporte para personas y mercancías, garantizando puntualidad,
					seguridad y eficiencia en cada servicio. Contamos con una flota
					moderna y personal capacitado que asegura el cumplimiento de los más
					altos estándares de calidad.
				</p>
			</div>

			<Waves />

			<h1 className="text-3xl md:text-4xl text-center font-bold text-sky-400 my-4">
				NUESTROS ALIADOS
			</h1>
			<BrandsCarousel brands={alliedBrandData} />

			<WavesTop />

			<div className="w-full flex flex-col lg:flex-row items-center justify-around bg-[#38bdf8] text-white px-6 py-10 gap-6">
				<p className="text-center text-lg sm:text-xl md:text-2xl w-full lg:w-1/2">
					Ofrecemos servicios de alta calidad en transporte de carga y
					logística, adaptándonos a las necesidades de nuestros clientes.
					Nuestra misión es proporcionar soluciones eficientes y seguras,
					garantizando la satisfacción del cliente a través de un servicio
					confiable y puntual. Con un equipo profesional y tecnología avanzada,
					nos comprometemos a optimizar cada proceso logístico, asegurando que
					sus cargas lleguen a su destino en perfectas condiciones y a tiempo.
				</p>
				<Image
					src={'/tractocamion-container.png'}
					alt="Logo"
					width={700}
					height={700}
					className="rounded-3xl w-full lg:w-1/2 object-cover"
				/>
			</div>

			<WavesBottom />

			<h1 className="text-3xl md:text-4xl mb-4 text-center font-bold text-sky-400">
				NUESTROS COLABORADORES
			</h1>
			<div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-4 py-10">
				<AvatarCard
					name="Leonardo Bustos De Avila"
					role="Gerente"
					description="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
					imageSrc="/brands/flexindustrial.jpeg"
				/>
				<AvatarCard
					name="Ana Mercedes Reales Valencia"
					role="Coordinadora de operaciones"
					description="Organiza la logistica de transporte y coordina los recursos necesarios"
					imageSrc="/brands/flexindustrial.jpeg"
				/>
				<AvatarCard
					name="Alexis Miguel Gutierrez Ruiz"
					role="Ingeniero de sistemas"
					description="Crea y mantiene la infraestructura de sistemas"
					imageSrc="/brands/flexindustrial.jpeg"
				/>
			</div>
			<p className="text-sky-600 text-center text-lg sm:text-xl md:text-2xl max-w-prose mx-auto mb-10 leading-relaxed">
				Somos una empresa de logística dedicada a conectar destinos, optimizando
				cada entrega con compromiso y precisión. Trabajamos diariamente para
				cumplir tus necesidades, llevando tus cargas a donde el tiempo y la
				confianza se encuentran.
			</p>

			<WhatsAppWidget />
		</>
	);
}
