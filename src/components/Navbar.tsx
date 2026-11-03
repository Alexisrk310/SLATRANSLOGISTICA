'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { links } from '@/config/routesPublic';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-15px_rgba(12,63,97,0.25)] border-b border-sky-100'
					: 'bg-white/60 backdrop-blur-md border-b border-transparent'
			}`}>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center gap-3 group"
						aria-label="Ir al inicio">
						<div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100 overflow-hidden transition-transform duration-500 group-hover:scale-105">
							<Image
								src="/logos/slatranslogistica.png"
								alt="TRANSLOGISTICA SLA"
								fill
								sizes="56px"
								className="object-contain p-1"
								priority
							/>
						</div>
						<div className="hidden sm:flex flex-col leading-tight">
							<span className="font-extrabold tracking-tight text-sky-900 text-[15px]">
								TRANSLOGÍSTICA SLA
							</span>
							<span className="text-[11px] uppercase tracking-[0.18em] text-sky-600 font-semibold">
								Transporte · Logística
							</span>
						</div>
					</Link>

					{/* Links Desktop */}
					<div className="hidden md:flex items-center gap-1">
						{links.map(({ href, label }) => {
							const active =
								href === '/' ? pathname === '/' : pathname?.startsWith(href);
							return (
								<Link
									key={href}
									href={href}
									className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
										active
											? 'text-sky-700'
											: 'text-slate-600 hover:text-sky-700'
									}`}>
									{label}
									<span
										className={`absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-sky-400 to-sky-600 transition-all duration-500 ${
											active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
										}`}
									/>
								</Link>
							);
						})}

						<Link
							href="https://wa.me/+573185445210"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary ml-3 !py-2.5 !px-5 text-sm">
							<FaWhatsapp className="text-base" />
							Cotizar
						</Link>
					</div>

					{/* Botón móvil */}
					<div className="md:hidden">
						<button
							onClick={() => setMenuOpen((v) => !v)}
							aria-label="Abrir menú"
							aria-expanded={menuOpen}
							className="p-2.5 rounded-xl text-sky-700 bg-sky-50 hover:bg-sky-100 transition">
							{menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
						</button>
					</div>
				</div>
			</nav>

			{/* Overlay móvil */}
			<div
				className={`fixed left-0 right-0 top-20 bottom-0 bg-sky-950/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
					menuOpen
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
				onClick={() => setMenuOpen(false)}
			/>

			{/* Panel móvil */}
			<div
				className={`md:hidden fixed top-20 left-0 right-0 z-50 origin-top transition-all duration-500 ${
					menuOpen
						? 'opacity-100 translate-y-0'
						: 'opacity-0 -translate-y-4 pointer-events-none'
				}`}>
				<div className="mx-4 mt-3 rounded-3xl bg-white shadow-2xl border border-sky-100 overflow-hidden">
					<div className="flex flex-col p-3">
						{links.map(({ href, label }) => {
							const active =
								href === '/' ? pathname === '/' : pathname?.startsWith(href);
							return (
								<Link
									key={href}
									href={href}
									onClick={() => setMenuOpen(false)}
									className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition ${
										active
											? 'bg-sky-50 text-sky-700'
											: 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
									}`}>
									<span>{label}</span>
									<span className="text-sky-400">→</span>
								</Link>
							);
						})}
						<Link
							href="https://wa.me/+573185445210"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setMenuOpen(false)}
							className="btn-primary mt-2">
							<FaWhatsapp /> Cotizar por WhatsApp
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
