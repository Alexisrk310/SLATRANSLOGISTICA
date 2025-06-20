'use client';
import FallingSection from '@/components/FallingSection';
import ServiceCard from '@/components/ServiceCard';
import ServicioHero from '@/components/ServicioHero';
import { freightForwardingFeatures } from '@/data/services/freightForwarding.data';
import { integralLogisticsFeatures } from '@/data/services/integralLogistics.data';
import { loadingAndUnloadingFeatures } from '@/data/services/loadingAndUnloading.data';
import { storageFeatures } from '@/data/services/storage.data';

import React, { useRef } from 'react';
import {
	FaTruckMoving,
	FaWarehouse,
	FaDolly,
	FaProjectDiagram,
	FaLock,
} from 'react-icons/fa';

const services = () => {
	const freightForwardingRef = useRef<HTMLDivElement>(null);
	const storageRef = useRef<HTMLDivElement>(null);
	const loadingAndUnloadingRef = useRef<HTMLDivElement>(null);
	const integralLogisticsRef = useRef<HTMLDivElement>(null);

	const handleScroll = (seccionRef: any) => {
		seccionRef.current?.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className="min-h-screen bg-white text-gray-800 p-6 pt-16 relative">
			<div className="max-w-5xl mx-auto text-center">
				<FallingSection>
					<h1 className="text-4xl font-extrabold text-sky-500 drop-shadow-md mb-8">
						Nuestros Servicios
					</h1>
					<p className="text-lg mb-12">
						En TRANSLOGISTICA SLA ofrecemos soluciones integrales de transporte,
						almacenamiento y logística.
					</p>
				</FallingSection>

				{/* MANTIENE LA ANIMACION DE CARGA DENTRO DEL COMPONENTE */}
				<div className="grid md:grid-cols-3 items-center gap-8">
					<ServiceCard
						onClick={() => handleScroll(freightForwardingRef)}
						icon={<FaTruckMoving size={40} className="text-sky-400" />}
						title="Transporte de Carga"
						description="Transporte en contenedores y carga suelta. Actualmente cubrimos rutas locales y regionales."
					/>
					<ServiceCard
						onClick={() => handleScroll(storageRef)}
						icon={<FaWarehouse size={40} className="text-sky-400" />}
						title="Almacenamiento"
						description="Servicio de almacenamiento en bodegas para todo tipo de mercancías."
					/>
					<ServiceCard
						onClick={() => handleScroll(loadingAndUnloadingRef)}
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
						onClick={() => handleScroll(integralLogisticsRef)}
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

				<FallingSection>
					<button
						onClick={() => handleScroll(freightForwardingRef)}
						className="mt-8 px-6 py-3 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 transition duration-300 cursor-pointer">
						Ver mas detalladamente nuestros servicios
					</button>
				</FallingSection>
			</div>
			<FallingSection>
				<ServicioHero
					ref={freightForwardingRef}
					title="Transporte de Carga"
					description={`Soluciones eficientes para movilizar tus mercancías.
						`}
					subDescription={`URBANO`}
					className="mt-16 services-hero"
					icon={<FaTruckMoving size={32} className="text-sky-500" />}
					imageUrl="/servicios/transporte-de-carga.png"
					features={freightForwardingFeatures}
					reversed={true}
				/>
			</FallingSection>
			<FallingSection>
				<ServicioHero
					ref={storageRef}
					title="Almacenamiento"
					description="Bodegas seguras para almacenar tus productos con control y gestión eficiente."
					className="mt-0"
					icon={<FaWarehouse size={32} className="text-sky-500" />}
					imageUrl="/servicios/bodegas.png"
					features={storageFeatures}
					reversed={false}
				/>
			</FallingSection>
			<FallingSection>
				<ServicioHero
					ref={loadingAndUnloadingRef}
					title="Cargue y Descargue"
					description="Maniobras seguras con equipos especializados para tus operaciones logísticas."
					className=""
					icon={<FaDolly size={32} className="text-sky-500" />}
					imageUrl="/servicios/cargue-y-descargue.png"
					features={loadingAndUnloadingFeatures}
					reversed={true}
				/>
			</FallingSection>
			<FallingSection>
				<ServicioHero
					ref={integralLogisticsRef}
					title="Logística Integral"
					description="Acompañamos todo tu proceso de logística desde el empaque hasta la desconsolidación."
					className=""
					icon={<FaProjectDiagram size={32} className="text-sky-500" />}
					imageUrl="/servicios/logistica.png"
					features={integralLogisticsFeatures}
					reversed={false}
				/>
			</FallingSection>
		</div>
	);
};

export default services;
