import React from 'react';

const page = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
			<div className="bg-sky-400 w-full max-w-3xl rounded-2xl shadow-2xl p-8 text-white text-center">
				<h1 className="text-4xl font-bold mb-4">SOMOS TRANSLOGISTICA SLA</h1>
				<p className="text-lg leading-relaxed">
					Somos una empresa dedicada al transporte terrestre y la logística,
					enfocada en brindar soluciones eficientes, seguras y adaptadas a las
					necesidades de cada cliente. Ofrecemos un servicio de calidad
					respaldado por tecnología avanzada y un equipo profesional altamente
					capacitado, lo que nos permite garantizar entregas puntuales,
					confiables y en óptimas condiciones, junto con servicios
					complementarios que optimizan tiempo y costos.
				</p>
			</div>
			<section className="w-full max-w-5xl mx-auto py-16 px-4">
				<div className="grid md:grid-cols-1 gap-8 justify-center">
					<div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-sky-400">
						<h2 className="text-2xl font-bold text-sky-500 mb-4">Misión</h2>
						<p className="text-gray-700 leading-relaxed">
							Somos una empresa de Logística y transporte de carga terrestre en
							donde ofrecemos un servicio de calidad dando a nuestros clientes
							soluciones puntuales a sus necesidades, generándoles mayores
							beneficios, confianza, teniendo disponibles una gama de servicios
							complementarios al transporte para mayor comodidad y economía
						</p>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-sky-400">
						<h2 className="text-2xl font-bold text-sky-500 mb-4">Visión</h2>
						<p className="text-gray-700 leading-relaxed">
							Mantenemos en el mercado siendo una empresa confiable para
							nuestros clientes y atractiva para otros, basándonos en la mejora
							continua y utilizando una tecnología de punta, que satisfaga las
							necesidades de nuestros clientes, para que se fidelicen y tomen
							cada uno de los servicios ofrecidos por nuestra compañía
						</p>
					</div>
					<div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-sky-400">
						<h2 className="text-2xl font-bold text-sky-500 mb-4">
							Objetivo Estratégico
						</h2>
						<p className="text-gray-700 leading-relaxed">
							Satisfacer con eficacia y eficiencia el transporte, la logística y
							distribución de materiales del cliente, dándole la confianza de
							que contamos con personal experimentado, capacitado y responsable
							a cargo de la empresa, por lo que podrá estar seguro los servicios
							serán acorde a sus expectativas y que sus entregas estarán en
							tiempo y forma pactados, en las mejores condiciones
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
