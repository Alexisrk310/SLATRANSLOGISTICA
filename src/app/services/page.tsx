'use client';
import React from 'react';
import {
	FaTruckMoving,
	FaWarehouse,
	FaDolly,
	FaProjectDiagram,
	FaLock,
} from 'react-icons/fa';

const services = () => {
	return (
		<div className="min-h-screen bg-white text-gray-800 p-6 pt-16 relative">
			<div className="max-w-5xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold text-sky-500 drop-shadow-md mb-8">
					Nuestros Servicios
				</h1>
				<p className="text-lg mb-12">
					En TRANSLOGISTICA SLA ofrecemos soluciones integrales de transporte,
					almacenamiento y logística.
				</p>

				<div className="grid md:grid-cols-3 items-center gap-8">
					<ServiceCard
						icon={<FaTruckMoving size={40} className="text-sky-400" />}
						title="Transporte de Carga"
						description="Transporte en contenedores y carga suelta. Actualmente cubrimos rutas locales y regionales."
					/>
					<ServiceCard
						icon={<FaWarehouse size={40} className="text-sky-400" />}
						title="Almacenamiento"
						description="Servicio de almacenamiento en bodegas para todo tipo de mercancías."
					/>
					<ServiceCard
						icon={<FaDolly size={40} className="text-sky-400" />}
						title="Cargue y Descargue"
						description="Cargue y descargue de mercancías con máquinas especializadas."
					/>
					<ServiceCard
						disabled={true}
						icon={<FaLock size={40} className="text-gray-700" />}
						title="PRONTO"
						description=""
					/>
					<ServiceCard
						icon={<FaProjectDiagram size={40} className="text-sky-400" />}
						title="Logística"
						description="Acompañamiento logístico, consolidación, desconsolidación, empaque, y vaciado de contenedores."
					/>

					<ServiceCard
						disabled={true}
						icon={<FaLock size={40} className="text-gray-700" />}
						title="PRONTO"
						description=""
					/>
				</div>
				<button className="mt-8 px-6 py-3 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 transition duration-300 cursor-pointer">
					Ver mas detalladamente nuestros servicios
				</button>
			</div>

			<ServicioHero
				title="Transporte de Carga"
				description="Soluciones eficientes para movilizar tus mercancías."
				className="mt-16"
				icon={<FaTruckMoving size={32} className="text-sky-500" />}
				imageUrl="/servicios/transporte-de-carga.png"
				features={[
					'Cobertura regional y nacional',
					'Cargas completas y consolidadas',
					'Seguimiento en tiempo real',
				]}
				reversed={true}
			/>
			<ServicioHero
				title="Almacenamiento"
				description="Bodegas seguras para almacenar tus productos con control y gestión eficiente."
				className="mt-16"
				icon={<FaWarehouse size={32} className="text-sky-500" />}
				imageUrl="/servicios/bodegas.png"
				features={[
					'Bodegas con vigilancia 24/7',
					'Control de inventario',
					'Espacios adaptables a tus necesidades',
				]}
			/>
			<ServicioHero
				title="Cargue y Descargue"
				description="Maniobras seguras con equipos especializados para tus operaciones logísticas."
				className="mt-16"
				icon={<FaDolly size={32} className="text-sky-500" />}
				imageUrl="/servicios/cargue-y-descargue.png"
				features={[
					'Personal calificado',
					'Uso de maquinaria especializada',
					'Procesos rápidos y seguros',
				]}
				reversed={true}
			/>
			<ServicioHero
				title="Logística Integral"
				description="Acompañamos todo tu proceso de logística desde el empaque hasta la desconsolidación."
				className="mt-16"
				icon={<FaProjectDiagram size={32} className="text-sky-500" />}
				imageUrl="/servicios/logistica.png"
				features={[
					'Empaque y embalaje',
					'Consolidación y desconsolidación',
					'Optimización de procesos logísticos',
				]}
			/>
			{/* <ServicioHero
				title="Próximamente"
				description="Estamos trabajando para traerte más soluciones a tus necesidades logísticas."
				className="mt-16"
				icon={<FaLock size={32} className="text-gray-500" />}
				imageUrl="/img/proximamente.jpg"
				features={[
					'Nuevas rutas',
					'Servicios especializados',
					'Mejora continua',
				]}
				reversed
			/> */}
		</div>
	);
};
// components/ServicioHero.tsx

interface ServicioHeroProps {
	title: string;
	description: string;
	className?: string;
	icon: React.ReactNode;
	imageUrl: string;
	features: string[];
	reversed?: boolean;
}

const ServicioHero: React.FC<ServicioHeroProps> = ({
	title,
	description,
	className = '',
	icon,
	imageUrl,
	features,
	reversed = false,
}) => {
	return (
		<section
			className={`${className} w-full bg-sky-50 text-gray-800 py-16 px-6`}>
			<div
				className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
					reversed ? 'md:flex-row-reverse' : ''
				}`}>
				{/* Imagen */}
				<div className="w-full md:w-1/2">
					<img
						src={imageUrl}
						alt={title}
						className="rounded-xl shadow-lg w-full h-auto object-cover"
					/>
				</div>

				{/* Contenido */}
				<div className="w-full md:w-1/2 px-4">
					<div className="mb-4">{icon}</div>
					<h2 className="text-4xl font-extrabold text-sky-500 drop-shadow-md mb-4">
						{title}
					</h2>
					<p className="text-gray-600 mb-4">{description}</p>
					<ul className="list-disc pl-5 text-gray-700 space-y-2">
						{features.map((feature, idx) => (
							<li key={idx}>{feature}</li>
						))}
					</ul>
					<button className="mt-8 px-6 py-3 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 transition duration-300 cursor-pointer">
						Prestar servicios
					</button>
				</div>
			</div>
		</section>
	);
};

interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	disabled?: boolean;
}

const ServiceCard = ({
	icon,
	title,
	description,
	disabled = false,
}: ServiceCardProps) => (
	<div
		className={`animated-border-top shadow-md rounded-xl p-6 text-center h-56 transition duration-300 flex flex-col items-center justify-center 
			${
				disabled
					? 'bg-gray-200 opacity-50 pointer-events-none'
					: 'bg-white hover:shadow-lg'
			}`}>
		<div className="mb-4 flex justify-center">{icon}</div>
		<h2 className="text-xl font-semibold text-sky-500 mb-2">{title}</h2>
		<p className="text-gray-600">{description}</p>
	</div>
);

export default services;
