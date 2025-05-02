'use client';
import React from 'react';

const about = () => {
	return (
		<div className="min-h-screen flex flex-col items-center">
			{/* Hero */}
			<section className="w-full bg-sky-400 text-white py-20 px-6 text-center">
				<h1 className="text-5xl font-bold mb-6">SOMOS TRANSLOGÍSTICA SLA</h1>
				<p className="text-lg max-w-4xl mx-auto leading-relaxed">
					Somos una empresa dedicada al transporte terrestre y la logística,
					enfocada en brindar soluciones eficientes, seguras y adaptadas a las
					necesidades de cada cliente. Ofrecemos un servicio de calidad
					respaldado por tecnología avanzada y un equipo profesional altamente
					capacitado, garantizando entregas puntuales, confiables y en óptimas
					condiciones.
				</p>
			</section>

			{/* Misión, visión, objetivo */}
			<section className="w-full max-w-6xl px-6 py-16">
				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
					<div className="bg-white shadow-lg rounded-2xl p-6 animated-border-left">
						<h2 className="text-2xl font-bold text-sky-600 mb-4">Misión</h2>
						<p className="text-gray-700 leading-relaxed">
							Somos una empresa de Logística y transporte de carga terrestre en
							donde ofrecemos un servicio de calidad dando a nuestros clientes
							soluciones puntuales a sus necesidades, generándoles mayores
							beneficios, confianza, teniendo disponibles una gama de servicios
							complementarios al transporte para mayor comodidad y economía.
						</p>
					</div>

					<div className="bg-white shadow-lg rounded-2xl p-6 animated-border-left">
						<h2 className="text-2xl font-bold text-sky-600 mb-4">Visión</h2>
						<p className="text-gray-700 leading-relaxed">
							Mantenemos en el mercado siendo una empresa confiable para
							nuestros clientes y atractiva para otros, basándonos en la mejora
							continua y utilizando una tecnología de punta, que satisfaga las
							necesidades de nuestros clientes, para que se fidelicen y tomen
							cada uno de los servicios ofrecidos por nuestra compañía.
						</p>
					</div>
				</div>

				{/* Objetivo estratégico ocupa toda la fila */}
				<div className="mt-8">
					<div className="bg-white shadow-lg rounded-2xl p-6 animated-border-left w-full">
						<h2 className="text-2xl font-bold text-sky-600 mb-4">
							Objetivo Estratégico
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Satisfacer con eficacia y eficiencia el transporte, la logística y
							distribución de materiales del cliente, dándole la confianza de
							que contamos con personal experimentado, capacitado y responsable
							a cargo de la empresa, por lo que podrá estar seguro los servicios
							serán acorde a sus expectativas y que sus entregas estarán en
							tiempo y forma pactados, en las mejores condiciones.
						</p>
					</div>
				</div>
			</section>

			{/* Sección adicional */}
			<section className="w-full bg-white py-16 px-6 text-center ">
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
		</div>
	);
};

export default about;
