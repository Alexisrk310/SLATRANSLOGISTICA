'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
	FaPhoneAlt,
	FaMapMarkerAlt,
	FaEnvelope,
	FaMapMarkedAlt,
} from 'react-icons/fa';

export default function Footer() {
	const [year, setYear] = useState<number | null>(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="bg-sky-400 text-white px-6 md:px-16 lg:px-24 py-12">
			<div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-12">
				{/* Logo */}
				<div className="flex flex-col items-center md:items-start max-w-xs text-center md:text-left">
					<Image
						src="/logos/logo-dark.png"
						alt="Logo"
						width={220}
						height={220}
						className="mb-4"
					/>
					<p className="text-sm opacity-80">
						Comprometidos con la logística eficiente y segura.
					</p>
				</div>

				{/* Información de contacto */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
					<div>
						<h4 className="font-extrabold text-lg mb-3">Contacto</h4>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center gap-2">
								<FaPhoneAlt className="text-white text-base" />
								+57 324 583 7514
							</li>
							<li className="flex items-center gap-2">
								<FaEnvelope className="text-white text-base" />
								operaciones@translogisticasla.com
							</li>
						</ul>
					</div>

					{/* Ubicación */}
					<div>
						<h4 className="font-extrabold text-lg mb-3">Ubicación</h4>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center gap-2">
								<FaMapMarkerAlt className="text-white text-base" />
								Cartagena, Colombia
							</li>
							<li className="flex items-center gap-2">
								<FaMapMarkedAlt className="text-white text-base" />
								<a
									href="https://maps.app.goo.gl/kwKRW9dnPtCJdxdb6"
									target="__blank"
									className="hover:underline">
									Ver mapa de ubicación
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Línea divisoria y derechos */}
			<div className="mt-10 border-t border-white/30 pt-4 text-center text-xs opacity-90 font-semibold">
				© {year ?? ''} <strong>TRANSLOGISTICA SLA.</strong> Todos los derechos
				reservados.
			</div>
		</footer>
	);
}
