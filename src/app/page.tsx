'use client';
import AvatarCard from '@/components/AvatarCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import FallingCard from '@/components/FallingCard';
import FallingSection from '@/components/FallingSection';
import WavesBottom from '@/components/WavesBottom';
import WavesTop from '@/components/WavesTop';
import { alliedBrandData } from '@/data/brands/alliedBrand.data';
import { teamMembers } from '@/data/team/teamMembers';

import Image from 'next/image';

export default function Home() {
	return (
		<>
			<FallingSection>
				<section className="w-full bg-sky-50 px-6 py-16 ">
					<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
						<Image
							src="/tractocamion/planificacion-de-logistica.png"
							alt="Tractocamión"
							width={700}
							height={700}
							className="rounded-3xl w-full lg:w-1/2 shadow-xl object-cover"
						/>
						<div className="flex flex-col justify-center gap-4 lg:w-1/2">
							<h1 className="text-4xl font-extrabold mb-6 text-center text-sky-500">
								TRANSLOGÍSTICA SLA
							</h1>
							<p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed text-sky-700">
								Nuestra empresa se especializa en ofrecer soluciones integrales
								de transporte de carga terrestre garantizando puntualidad,
								seguridad y eficiencia en cada servicio. Contamos con una flota
								moderna y personal capacitado que asegura el cumplimiento de los
								más altos estándares de calidad.
							</p>
						</div>
					</div>
				</section>
			</FallingSection>

			<FallingSection>
				<section className="text-center my-28 px-4">
					<h2 className="text-4xl font-extrabold text-sky-500 mb-8 drop-shadow-md">
						NUESTROS CLIENTES
					</h2>
					<BrandsCarousel brands={alliedBrandData} />
				</section>
			</FallingSection>

			<FallingSection>
				<WavesTop />
				<section className="w-full bg-sky-400 text-white px-6 py-16">
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
							src="/tractocamion/cargue.png"
							alt="Tractocamión 2"
							width={700}
							height={700}
							className="rounded-3xl w-full lg:w-1/2 shadow-xl object-cover"
						/>
					</div>
				</section>
				<WavesBottom />
				{/* <section className="w-full bg-sky-50 text-sky-700 px-6 py-16">
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
							src="/tractocamion/cargue.png"
							alt="Tractocamión 2"
							width={700}
							height={700}
							className="rounded-3xl w-full lg:w-1/2 shadow-xl object-cover"
						/>
					</div>
				</section> */}
			</FallingSection>

			<section className="pb-12 px-4 text-center">
				<FallingSection>
					<h2 className="text-4xl font-extrabold text-sky-500 mb-16 drop-shadow-md">
						NUESTROS COLABORADORES
					</h2>
				</FallingSection>
				{/* MANTIENE LA ANIMACION DE CARGA DENTRO DEL COMPONENTE */}
				<div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
					{teamMembers.map((member, index) => (
						<FallingCard index={index} key={index}>
							<AvatarCard {...member} />
						</FallingCard>
					))}
				</div>
			</section>

			{/* <FallingSection>
				<div className="px-4 flex flex-col items-center gap-4">
					<h2 className="text-4xl font-extrabold text-sky-500 mt-10 mb-6 drop-shadow-md">
					OPERADORES
					</h2>

					{drivers.map((driver, index) => (
						<ProfileCard
							key={index}
							nombre={driver.nombre}
							role={driver.role}
							descripcion={driver.descripcion}
							imageSrc={driver.imageSrc}
						/>
					))}
				</div>
			</FallingSection> */}
			<FallingSection>
				<p className="text-center mb-8 mt-10 text-sky-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto  leading-relaxed">
					Somos una empresa de transporte y logística dedicada a conectar
					destinos, optimizando cada entrega con compromiso y precisión.
					Trabajamos diariamente para cumplir tus necesidades, llevando tus
					cargas a donde el tiempo y la confianza se encuentran.
				</p>
			</FallingSection>
		</>
	);
}
