'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
	const [year, setYear] = useState<number | null>(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="bg-gradient-to-b from-sky-400 to-sky-500 text-white px-6 md:px-16 lg:px-24 py-10">
			<div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left justify-center gap-10 flex-wrap">
				<div className="flex flex-col gap-2 max-w-xs">
					<Image
						src="/logos/logo-dark.png"
						alt="Logo"
						width={250}
						height={250}
						className="mx-auto md:mx-0"
					/>
				</div>

				<div className="flex flex-col gap-1 min-w-[180px]">
					<h4 className="font-extrabold drop-shadow mb-2">Teléfono</h4>
					<p className="text-sm">+57 3245837514</p>
					<p className="text-sm">+57 3245837514</p>
					<p className="text-sm">+57 3245837514</p>
				</div>

				<div className="flex flex-col gap-1 min-w-[180px]">
					<h4 className="font-extrabold drop-shadow mb-2">WhatsApp</h4>
					<p className="text-sm">+57 3245837514</p>
					<p className="text-sm">+57 3245837514</p>
					<p className="text-sm">+57 3245837514</p>
				</div>

				<div className="flex flex-col gap-1 min-w-[180px]">
					<h4 className="font-extrabold drop-shadow mb-2">Dirección</h4>
					<p className="text-sm">Cartagena, Colombia</p>
					<p className="text-sm">Mamonal, Provincia de Cartagena, Bolívar</p>
				</div>

				<div className="flex flex-col gap-1 min-w-[180px]">
					<h4 className="font-extrabold drop-shadow mb-2">Ubicación</h4>
					<a href="#" className="text-sm hover:underline">
						Ver mapa Colombia
					</a>
				</div>
			</div>

			<div className="mt-10 text-center text-xs font-extrabold drop-shadow text-white border-t border-gray-600 pt-4">
				© {year ?? ''} TRANSLOGISTICA SLA. Todos los derechos reservados.
			</div>
		</footer>
	);
}
