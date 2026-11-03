'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
	FaPhoneAlt,
	FaMapMarkerAlt,
	FaEnvelope,
	FaMapMarkedAlt,
	FaWhatsapp,
} from 'react-icons/fa';
import { links } from '@/config/routesPublic';

export default function Footer() {
	const [year, setYear] = useState<number | null>(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="relative bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800 text-white overflow-hidden">
			{/* Decoraciones */}
			<div className="absolute inset-0 grid-pattern opacity-[0.07] pointer-events-none" />
			<div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />
			<div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-14 py-16">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
					{/* Branding */}
					<div className="md:col-span-5">
						<div className="flex items-center gap-4">
						<div className="relative w-16 h-16 rounded-full bg-white ring-2 ring-white/30 overflow-hidden shadow-lg">
							<Image
								src="/logos/slatranslogistica.png"
								alt="TRANSLOGISTICA SLA"
								fill
								sizes="64px"
								className="object-contain scale-125 p-1"
							/>
						</div>
							<div>
								<p className="text-lg font-extrabold tracking-tight">
									TRANSLOGÍSTICA SLA
								</p>
								<p className="text-xs uppercase tracking-[0.2em] text-sky-200/80 font-semibold">
									S.A.S
								</p>
							</div>
						</div>
						<p className="mt-6 text-sky-100/85 leading-relaxed max-w-md">
							Comprometidos con la logística eficiente y segura. Soluciones
							integrales de transporte terrestre, almacenamiento y distribución
							con cobertura nacional.
						</p>

						<Link
							href="https://wa.me/+573185445210"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary mt-7 !py-3 !px-5 text-sm">
							<FaWhatsapp /> Hablar con un asesor
						</Link>
					</div>

					{/* Navegación */}
					<div className="md:col-span-3">
						<h4 className="text-xs uppercase tracking-[0.22em] text-sky-200/70 font-bold mb-5">
							Navegación
						</h4>
						<ul className="space-y-3">
							{links.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										className="group inline-flex items-center gap-2 text-sky-50/90 hover:text-white transition">
										<span className="h-[2px] w-4 bg-sky-400/70 transition-all duration-300 group-hover:w-7" />
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contacto */}
					<div className="md:col-span-4">
						<h4 className="text-xs uppercase tracking-[0.22em] text-sky-200/70 font-bold mb-5">
							Contacto
						</h4>
						<ul className="space-y-4 text-sm">
							<li>
								<a
									href="tel:+573185445210"
									className="flex items-start gap-3 text-sky-50/90 hover:text-white transition">
									<span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
										<FaPhoneAlt />
									</span>
									<span>
										<span className="block text-[11px] uppercase tracking-wider text-sky-300/70">
											Teléfono
										</span>
										+57 318 544 5210
									</span>
								</a>
							</li>
							<li>
								<a
									href="mailto:diroperaciones@translogisticasla.com"
									className="flex items-start gap-3 text-sky-50/90 hover:text-white transition">
									<span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
										<FaEnvelope />
									</span>
									<span>
										<span className="block text-[11px] uppercase tracking-wider text-sky-300/70">
											Correo
										</span>
										diroperaciones@translogisticasla.com
									</span>
								</a>
							</li>
							<li className="flex items-start gap-3 text-sky-50/90">
								<span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
									<FaMapMarkerAlt />
								</span>
								<span>
									<span className="block text-[11px] uppercase tracking-wider text-sky-300/70">
										Ubicación
									</span>
									Cartagena, Colombia
								</span>
							</li>
							<li>
								<a
									href="https://maps.app.goo.gl/kwKRW9dnPtCJdxdb6"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-start gap-3 text-sky-50/90 hover:text-white transition">
									<span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
										<FaMapMarkedAlt />
									</span>
									<span>
										<span className="block text-[11px] uppercase tracking-wider text-sky-300/70">
											Mapa
										</span>
										Ver mapa de ubicación
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-100/70">
					<p>
						© {year ?? ''}{' '}
						<strong className="text-white">TRANSLOGISTICA SLA.</strong> Todos
						los derechos reservados.
					</p>
					<p className="tracking-wider uppercase">
						Transporte · Almacenamiento · Logística
					</p>
				</div>
			</div>
		</footer>
	);
}
