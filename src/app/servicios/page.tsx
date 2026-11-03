'use client';
import FallingCard from '@/components/FallingCard';
import ServiceCard from '@/components/ServiceCard';
import ServicioHero from '@/components/ServicioHero';
import { freightForwardingFeatures } from '@/data/services/freightForwarding.data';
import { integralLogisticsFeatures } from '@/data/services/integralLogistics.data';
import { loadingAndUnloadingFeatures } from '@/data/services/loadingAndUnloading.data';
import { allServices } from '@/data/services/services';
import { storageFeatures } from '@/data/services/storage.data';
import { useGsapReveal } from '@/hooks/useGsapReveal';

import React, { useRef } from 'react';
import {
	FaTruckMoving,
	FaWarehouse,
	FaDolly,
	FaProjectDiagram,
	FaArrowDown,
} from 'react-icons/fa';

const ServicesPage = () => {
	const scope = useGsapReveal<HTMLDivElement>();
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
		<div ref={scope} className="min-h-screen bg-white text-slate-800">
			{/* ============ HERO ============ */}
			<section className="relative isolate pt-16 lg:pt-24 pb-16 overflow-hidden">
				<div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
				<div className="absolute inset-0 -z-10 grid-pattern opacity-50 hero-fade-bottom" />
				<div className="absolute inset-x-0 top-0 -z-10 h-[85%] radial-glow" />

				<div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-5">
					<h1
						data-reveal="up"
						className="font-display text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-950 leading-[1.05]">
						Nuestros{' '}
						<span className="title-gradient">servicios</span>
					</h1>
					<p data-reveal="up" className="text-lg text-slate-600 max-w-2xl">
						En TRANSLOGISTICA SLA ofrecemos soluciones integrales de
						transporte, almacenamiento y logística.
					</p>
				</div>

				<div className="max-w-6xl mx-auto px-6 mt-14">
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{allServices.map((service, index) => (
							<FallingCard
								index={index}
								key={index}
								disabled={service.disabled}>
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

					<div className="flex justify-center mt-12" data-reveal="up">
						<button
							onClick={() => handleScroll(freightForwardingRef)}
							className="btn-primary">
							Ver más detalladamente nuestros servicios
							<FaArrowDown />
						</button>
					</div>
				</div>
			</section>

			{/* Secciones alternando fondo para dar ritmo */}
			<div className="bg-gradient-to-b from-white to-sky-50/40">
				<ServicioHero
					ref={freightForwardingRef}
					title="Transporte de Carga"
					description={`Soluciones eficientes para movilizar tus mercancías.`}
					subDescription={`URBANO`}
					icon={<FaTruckMoving size={24} />}
					imageUrl="/servicios/transporte-de-carga.png"
					features={freightForwardingFeatures}
					reversed={true}
				/>
			</div>
			<div className="bg-white">
				<ServicioHero
					ref={storageRef}
					title="Almacenamiento"
					description="Bodegas seguras para almacenar tus productos con control y gestión eficiente."
					icon={<FaWarehouse size={24} />}
					imageUrl="/servicios/bodegas.png"
					features={storageFeatures}
					reversed={false}
				/>
			</div>
			<div className="bg-gradient-to-b from-sky-50/40 to-white">
				<ServicioHero
					ref={loadingAndUnloadingRef}
					title="Cargue y Descargue"
					description="Maniobras seguras con equipos especializados para tus operaciones logísticas."
					icon={<FaDolly size={24} />}
					imageUrl="/servicios/cargue-y-descargue.png"
					features={loadingAndUnloadingFeatures}
					reversed={true}
				/>
			</div>
			<div className="bg-white">
				<ServicioHero
					ref={integralLogisticsRef}
					title="Logística Integral"
					description="Acompañamos todo tu proceso de logística desde el empaque hasta la desconsolidación."
					icon={<FaProjectDiagram size={24} />}
					imageUrl="/servicios/logistica.png"
					features={integralLogisticsFeatures}
					reversed={false}
				/>
			</div>
		</div>
	);
};

export default ServicesPage;
