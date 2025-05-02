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
			<section className="w-full bg-gradient-to-b from-sky-400 to-sky-500 text-white px-6 py-16">
				<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
					<Image
						src="/tractocamion/tractocamion-container-en-via.png"
						alt="Tractocamión"
						width={700}
						height={700}
						className="rounded-3xl w-full lg:w-1/2 shadow-xl object-cover"
					/>
					<p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed lg:w-1/2">
						Nuestra empresa se especializa en ofrecer soluciones integrales de
						transporte para personas y mercancías, garantizando puntualidad,
						seguridad y eficiencia en cada servicio. Contamos con una flota
						moderna y personal capacitado que asegura el cumplimiento de los más
						altos estándares de calidad.
					</p>
				</div>
			</section>

			<Waves />

			<section className="text-center py-12 px-4">
				<h2 className="text-4xl font-extrabold text-sky-500 mb-8 drop-shadow-md">
					NUESTROS ALIADOS
				</h2>
				<BrandsCarousel brands={alliedBrandData} />
			</section>

			<WavesTop />

			<section className="w-full bg-gradient-to-b from-sky-500 to-sky-600 text-white px-6 py-16">
				<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
					<p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed lg:w-1/2">
						Ofrecemos servicios de alta calidad en transporte de carga y
						logística, adaptándonos a las necesidades de nuestros clientes.
						Nuestra misión es proporcionar soluciones eficientes y seguras,
						garantizando la satisfacción del cliente a través de un servicio
						confiable y puntual. Con un equipo profesional y tecnología
						avanzada, nos comprometemos a optimizar cada proceso logístico,
						asegurando que sus cargas lleguen a su destino en perfectas
						condiciones y a tiempo.
					</p>
					<Image
						src="/tractocamion/tractocamion-container-en-via.png"
						alt="Tractocamión 2"
						width={700}
						height={700}
						className="rounded-3xl w-full lg:w-1/2 shadow-xl object-cover"
					/>
				</div>
			</section>

			<WavesBottom />

			<section className="py-12 px-4 text-center">
				<h2 className="text-4xl font-extrabold text-sky-500 mb-8 drop-shadow-md">
					NUESTROS COLABORADORES
				</h2>
				<div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
					<AvatarCard
						name="Leonardo Bustos De Avila"
						role="Gerente"
						description="Lidera y supervisa todas las operaciones de la empresa, asegurando un servicio de excelencia."
						imageSrc="/brands/flexindustrial.jpeg"
					/>
					<AvatarCard
						name="Ana Mercedes Reales Valencia"
						role="Coordinadora de operaciones"
						description="Organiza la logística de transporte y coordina los recursos necesarios."
						imageSrc="/brands/flexindustrial.jpeg"
					/>
					<AvatarCard
						name="Alexis Miguel Gutierrez Ruiz"
						role="Ingeniero de sistemas"
						description="Crea y mantiene la infraestructura de sistemas tecnológicos de la empresa."
						imageSrc="/brands/flexindustrial.jpeg"
					/>
				</div>
				<p className="text-sky-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mt-10 leading-relaxed">
					Somos una empresa de logística dedicada a conectar destinos,
					optimizando cada entrega con compromiso y precisión. Trabajamos
					diariamente para cumplir tus necesidades, llevando tus cargas a donde
					el tiempo y la confianza se encuentran.
				</p>
			</section>

			
		</>
	);
}
