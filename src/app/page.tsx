'use client';
import Waves from '@/components/Waves';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className="w-full flex items-center justify-around bg-[#38bdf8] text-white p-10">
				<Image
					src={'/carro-container.jpg'}
					alt="Logo"
					width={350}
					height={350}
					className="rounded-full  h-1/2 object-cover"
				/>
				<p className="text-center w-1/2 text-2xl">
					Nuestra empresa se especializa en ofrecer soluciones integrales de
					transporte para personas y mercancías, garantizando puntualidad,
					seguridad y eficiencia en cada servicio. Contamos con una flota
					moderna y personal capacitado que asegura el cumplimiento de los más
					altos estándares de calidad.
				</p>
			</div>
			<Waves />
			<WhatsAppWidget />
		</>
	);
}
