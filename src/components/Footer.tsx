'use client';
import Image from 'next/image'; // Si no usas Next.js, usa <img />
import { useEffect, useState } from 'react';

export default function Footer() {
	const [year, setYear] = useState<number | null>(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="bg-[#002b56] text-white px-6 md:px-16 lg:px-24 py-10">
			<div className="flex flex-col md:flex-row justify-between gap-10 flex-wrap">
				<div className="flex flex-col gap-2 max-w-xs">
					<Image
						src={'/logos/logo-dark.png'}
						alt="Logo"
						width={350}
						height={350}
					/>
				</div>

				<div className="flex flex-col gap-1 min-w-[180px]">
					<h4 className="font-bold mb-2">Teléfono</h4>
					<p className="text-sm text-gray-300">+57 000000000</p>
					<p className="text-sm text-gray-300">+57 000000000</p>
					<p className="text-sm text-gray-300">+57 000000000</p>
				</div>

				<div className="flex flex-col gap-1 min-w-[180px]">
					<h4 className="font-bold mb-2">WhatsApp</h4>
					<p className="text-sm text-gray-300">+57 000000000</p>
					<p className="text-sm text-gray-300">+57 000000000</p>
					<p className="text-sm text-gray-300">+57 000000000</p>
				</div>

				<div className="flex flex-col gap-1 min-w-[220px]">
					<h4 className="font-bold mb-2">Dirección</h4>
					<p className="text-sm text-gray-300">Cartagena central 2</p>
					<p className="text-sm text-gray-300">Otra ubicacion</p>
					<p className="text-sm text-gray-300">Otra ubicacion</p>
				</div>

				<div className="flex flex-col gap-1 min-w-[220px]">
					<h4 className="font-bold mb-2">Ubicación</h4>
					<a href="#" className="text-sm text-blue-300 hover:underline">
						Ver mapa Colombia
					</a>
				</div>
			</div>

			<div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-600 pt-4">
				© {year ?? ''} TRANSLOGISTICA SLA. Todos los derechos reservados.
			</div>
		</footer>
	);
}
