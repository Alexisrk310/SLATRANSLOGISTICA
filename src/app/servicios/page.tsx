'use client';
import FallingCard from '@/components/FallingCard';
import FallingSection from '@/components/FallingSection';
import ServiceCard from '@/components/ServiceCard';
import ServicioHero from '@/components/ServicioHero';
import { freightForwardingFeatures } from '@/data/services/freightForwarding.data';
import { integralLogisticsFeatures } from '@/data/services/integralLogistics.data';
import { loadingAndUnloadingFeatures } from '@/data/services/loadingAndUnloading.data';
import { allServices } from '@/data/services/services';
import { storageFeatures } from '@/data/services/storage.data';

import React, { useRef } from 'react';
import {
	FaTruckMoving,
	FaWarehouse,
	FaDolly,
	FaProjectDiagram,
} from 'react-icons/fa';

const services = () => {
	const freightForwardingRef = useRef<HTMLDivElement>(null);
	const storageRef = useRef<HTMLDivElement>(null);
	const loadingAndUnloadingRef = useRef<HTMLDivElement>(null);
	const integralLogisticsRef = useRef<HTMLDivElement>(null);
	const refsMap = {
		freightForwardingRef,
		storageRef,
		loadingAndUnloadingRef,
		integralLogisticsRef,
	};
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
					{allServices.map((service, index) => (
						<FallingCard index={index} key={index} disabled={service.disabled}>
							<ServiceCard
								key={index}
								disabled={service.disabled}
								icon={service.icon}
								title={service.title}
								description={service.description}
								onClick={
									service.onClickRef
										? () =>
												handleScroll(
													refsMap[service.onClickRef as keyof typeof refsMap]
												)
										: undefined
								}
							/>
						</FallingCard>
					))}
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
