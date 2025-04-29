import React from 'react';

const page = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
			<div className="bg-sky-400 w-full max-w-3xl rounded-2xl shadow-2xl p-8 text-white text-center">
				<h1 className="text-4xl font-bold mb-4">SOMOS TRANSLOGISTICA SLA</h1>
				<p className="text-lg leading-relaxed">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
					possimus dolorum non ea temporibus, nobis sint voluptas vitae
					praesentium, laudantium, perferendis nisi cupiditate placeat est
					consequatur totam. Rerum autem voluptatum aperiam ut nisi. Dolores
					consectetur error minus perferendis iusto adipisci, tempore cupiditate
					beatae quisquam, quod doloremque veniam ea, saepe odio!
				</p>
			</div>
			<section className="w-full max-w-5xl mx-auto py-16 px-4">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-sky-400">
						<h2 className="text-2xl font-bold text-sky-500 mb-4">Misión</h2>
						<p className="text-gray-700 leading-relaxed">
							Ofrecer soluciones de transporte seguras, eficientes y puntuales
							que superen las expectativas de nuestros clientes, apoyándonos en
							tecnología de vanguardia, personal capacitado y un firme
							compromiso con la calidad y el servicio.
						</p>
					</div>

					<div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-sky-400">
						<h2 className="text-2xl font-bold text-sky-500 mb-4">Visión</h2>
						<p className="text-gray-700 leading-relaxed">
							Ser reconocidos como la empresa líder en servicios de transporte a
							nivel nacional, destacándonos por nuestra innovación,
							confiabilidad y compromiso con el desarrollo sostenible y la
							satisfacción de nuestros clientes.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
