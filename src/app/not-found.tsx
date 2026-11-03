'use client';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
	return (
		<div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6 text-center">
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-sky-50" />
			<div className="absolute inset-0 -z-10 grid-pattern opacity-50 hero-fade-bottom" />
			<div className="absolute inset-x-0 top-0 -z-10 h-[85%] radial-glow" />

			<p className="font-display text-[9rem] sm:text-[12rem] leading-none font-black title-gradient drop-shadow-sm">
				404
			</p>
			<h1 className="text-2xl md:text-3xl font-extrabold mt-2 text-sky-950">
				Página no encontrada
			</h1>
			<p className="mt-3 max-w-md text-slate-600">
				La página que buscas no existe o fue movida. Verifica la URL o vuelve a
				la página principal.
			</p>

			<Link href="/" className="btn-primary mt-8">
				<FaArrowLeft /> Volver al inicio
			</Link>
		</div>
	);
}
