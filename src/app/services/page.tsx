'use client';
import React from 'react';
import {
	FaTruckMoving,
	FaBoxes,
	FaWarehouse,
	FaDolly,
	FaProjectDiagram,
	FaMapMarkedAlt,
} from 'react-icons/fa';

const page = () => {
	return (
		<div className="min-h-screen bg-white text-gray-800 p-6 pt-16 relative">
			<div className="max-w-5xl mx-auto text-center">
				<h1 className="text-4xl font-bold text-sky-500 mb-8">
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
						icon={<FaProjectDiagram size={40} className="text-sky-400" />}
						title="Logística"
						description="Acompañamiento logístico, consolidación, desconsolidación, empaque, y vaciado de contenedores."
					/>
				</div>
			</div>
		</div>
	);
};

const ServiceCard = ({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) => (
	<div className="bg-white shadow-md border-t-4 border-sky-400 rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
		<div className="mb-4 flex justify-center">{icon}</div>
		<h2 className="text-xl font-semibold text-sky-500 mb-2">{title}</h2>
		<p className="text-gray-600">{description}</p>
	</div>
);

export default page;
