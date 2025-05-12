'use client';
import AvatarCard from '@/components/AvatarCard';
import ProfileCard from '@/components/ProfileCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import FallingSection from '@/components/FallingSection';
import WavesBottom from '@/components/WavesBottom';
import WavesTop from '@/components/WavesTop';
import { alliedBrandData } from '@/data/brands/alliedBrand.data';
import { drivers } from '@/data/workers/drivers';

import Image from 'next/image';

export default function Home() {
	return (
		<>
			<FallingSection>
				<section className="w-full bg-gradient-to-b from-sky-400 to-sky-500 text-white px-6 py-16">
					<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
						<Image
							src="/tractocamion/planificacion-de-logistica.png"
							alt="Tractocamión"
							width={700}
							height={700}
							className="rounded-3xl w-full lg:w-1/2 shadow-xl object-cover"
						/>
						<p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed lg:w-1/2">
							Nuestra empresa se especializa en ofrecer soluciones integrales de
							transporte de carga terrestre garantizando puntualidad, seguridad
							y eficiencia en cada servicio. Contamos con una flota moderna y
							personal capacitado que asegura el cumplimiento de los más altos
							estándares de calidad.
						</p>
					</div>
				</section>
				<WavesBottom />
			</FallingSection>

			<FallingSection>
				<section className="text-center py-12 px-4">
					<h2 className="text-4xl font-extrabold text-sky-500 mb-8 drop-shadow-md">
						NUESTROS CLIENTES
					</h2>
					<BrandsCarousel brands={alliedBrandData} />
				</section>
			</FallingSection>

			<FallingSection>
				<WavesTop />
				<section className="w-full bg-[#0ea5e9] text-white px-6 py-16">
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
			</FallingSection>

			<FallingSection>
				<section className="py-12 px-4 text-center">
					<h2 className="text-4xl font-extrabold text-sky-500 mb-16 drop-shadow-md">
						NUESTROS COLABORADORES
					</h2>
					<div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
						<AvatarCard
							name="Leonardo Bustos De Avila"
							role="Gerente"
							description="Lidera y supervisa todas las operaciones de la empresa, asegurando un servicio de excelencia."
							imageSrc="/logos/slatranslogistica-logo.png"
						/>
						<AvatarCard
							name="Ana Mercedes Reales Palencia"
							role="Coordinadora de operaciones"
							description="Organiza la logística de transporte y coordina los recursos necesarios."
							imageSrc="/logos/slatranslogistica-logo.png"
						/>
						<AvatarCard
							name="Alexis Miguel Gutierrez Ruiz"
							role="Ingeniero de sistemas"
							description="Crea y mantiene la infraestructura de sistemas tecnológicos de la empresa."
							imageSrc="/logos/slatranslogistica-logo.png"
						/>
						<AvatarCard
							name="Lisseth Del Carmen López"
							role="Asesora de comercio exterior"
							description="Coordina, asesora y gestiona los procesos relacionados con la importación y exportación de mercancías"
							imageSrc="/logos/slatranslogistica-logo.png"
						/>
						<AvatarCard
							name="Lorena Sofia Bustos"
							role="Auxiliar administrativa"
							description="Apoya en las labores operativas y administrativas"
							imageSrc="/logos/slatranslogistica-logo.png"
						/>
					</div>
				</section>
			</FallingSection>

			<FallingSection>
				<div className="px-4 flex flex-col items-center gap-4">
					<h1 className="text-4xl font-extrabold text-sky-500 mt-10 mb-6 drop-shadow-md">
						OPERADORES
					</h1>

					{drivers.map((driver, index) => (
						<ProfileCard
							key={index}
							nombre={driver.nombre}
							descripcion={driver.descripcion}
							imageSrc={driver.imageSrc}
						/>
					))}
				</div>
			</FallingSection>
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
