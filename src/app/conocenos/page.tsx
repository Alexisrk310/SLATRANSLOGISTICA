'use client';
import FallingSection from '@/components/FallingSection';
import FallingCard from '@/components/FallingCard';
import React from 'react';
import { companyInfo } from '@/data/company/companyInfo';

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

			{/* Misión, visión, objetivo */}
			<section className="w-full max-w-6xl px-6 py-16">
				{/* Bloques que no ocupan toda la fila */}
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
					{companyInfo
						.filter((item) => !item.fullRow)
						.map((item, index) => (
							<FallingCard key={index} index={index}>
								<div className="bg-white shadow-lg rounded-2xl p-6 animated-border-left">
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
			</section>

			{/* Sección adicional */}
			<FallingSection>
				<section className="w-full py-16 px-6 text-center ">
					<h2 className="text-4xl font-bold text-sky-600 mb-6">
						Nuestros Valores
					</h2>
					<p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
						Nos guiamos por principios sólidos como la responsabilidad, la
						transparencia y el compromiso con nuestros clientes. Cada entrega es
						una promesa cumplida, y trabajamos cada día para fortalecer la
						confianza que nuestros aliados comerciales depositan en nosotros.
					</p>
				</section>
			</FallingSection>
		</div>
	);
};

export default about;
