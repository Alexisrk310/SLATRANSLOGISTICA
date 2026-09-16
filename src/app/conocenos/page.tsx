'use client';
import FallingSection from '@/components/FallingSection';
import FallingCard from '@/components/FallingCard';
import React from 'react';
import {
	companyInfo,
	companyValues,
	companyValuesIntro,
} from '@/data/company/companyInfo';

const about = () => {
	return (
		<div className="min-h-screen flex flex-col items-center">
			{/* Hero */}
			<section className="w-full bg-sky-400 text-white py-20 px-6 text-center">
				<FallingSection>
					<h1 className="md:text-5xl sm:text-4xl font-bold mb-6 text-center">
						SOMOS TRANSLOGÍSTICA SLA
					</h1>
					<p className="text-lg max-w-4xl mx-auto leading-relaxed">
						Somos una empresa dedicada al transporte terrestre y la logística,
						enfocada en brindar soluciones eficientes, seguras y adaptadas a las
						necesidades de cada cliente. Ofrecemos un servicio de calidad
						respaldado por tecnología avanzada y un equipo profesional altamente
						capacitado, garantizando entregas puntuales, confiables y en óptimas
						condiciones.
					</p>
				</FallingSection>
			</section>

			{/* VISIÓN, MISIÓN Y VALORES */}
			<section className="w-full max-w-6xl px-6 py-16">
				<FallingSection>
					<div className="text-center mb-12">
						<h2 className="text-4xl font-extrabold text-sky-500 drop-shadow-md mb-4">
							VISIÓN, MISIÓN Y VALORES
						</h2>
						<p className="text-lg font-semibold text-sky-700 leading-relaxed">
							Enfoque en Servicios Logísticos, Transporte y Operación en Zona
							Franca
						</p>
					</div>
				</FallingSection>

				{/* Bloques que no ocupan toda la fila */}
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
					{companyInfo
						.filter((item) => !item.fullRow)
						.map((item, index) => (
							<FallingCard key={index} index={index}>
								<div className="bg-white shadow-lg rounded-2xl p-6 animated-border-left h-full">
									<h2 className="text-2xl font-bold text-sky-600 mb-4">
										{item.title}
									</h2>
									<p className="text-gray-700 leading-relaxed">{item.text}</p>
								</div>
							</FallingCard>
						))}
				</div>

				{/* Bloques que ocupan toda la fila */}
				<div className="mt-8">
					{companyInfo
						.filter((item) => item.fullRow)
						.map((item, index) => (
							<FallingCard key={index} index={index}>
								<div className="bg-white shadow-lg rounded-2xl p-6 animated-border-left w-full">
									<h2 className="text-2xl font-bold text-sky-600 mb-4">
										{item.title}
									</h2>
									<p className="text-gray-700 leading-relaxed">{item.text}</p>
								</div>
							</FallingCard>
						))}
				</div>

				{/* Nuestros Valores */}
				<FallingSection>
					<div className="text-center mt-20 mb-10">
						<h2 className="text-4xl font-extrabold text-sky-500 drop-shadow-md mb-6">
							Nuestros Valores
						</h2>
						<p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
							{companyValuesIntro}
						</p>
					</div>
				</FallingSection>

				{/* Tarjetas de valores */}
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
					{companyValues.map((value, index) => (
						<FallingCard key={index} index={index}>
							<div className="bg-white shadow-lg rounded-2xl p-6 animated-border-left h-full">
								<h2 className="text-2xl font-bold text-sky-600 mb-4">
									{value.title}
								</h2>
								<p className="text-gray-700 leading-relaxed mb-4">{value.text}</p>
								<p className="text-sm font-semibold text-sky-700 uppercase tracking-wide mb-1">
									¿Por qué es clave?
								</p>
								<p className="text-gray-600 leading-relaxed">{value.reason}</p>
							</div>
						</FallingCard>
					))}
				</div>

				</section>
		</div>
	);
};

export default about;