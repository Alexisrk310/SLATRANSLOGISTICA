'use client';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 via-orange-50 to-sky-400 px-6 text-center">
			<h1 className="text-9xl font-extrabold text-sky-600 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
				404
			</h1>
			<h2 className="text-2xl md:text-3xl font-bold mt-4 text-sky-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
				Página no encontrada
			</h2>
			<p className="mt-2 max-w-md text-sky-600 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
				La página que buscas no existe o fue movida. Verifica la URL o vuelve a
				la página principal.
			</p>

			<Link
				href="/"
				className="mt-6 flex items-center gap-2 bg-white text-sky-600 px-5 py-3 rounded-full font-semibold shadow-lg hover:bg-sky-100 transition">
				<FaArrowLeft /> Volver al inicio
			</Link>
		</div>
	);
}
