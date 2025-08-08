'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { links } from '@/config/routesPublic';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="bg-sky-400 text-white shadow-md w-full z-50 left-0">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/logos/logo-dark.png"
							alt="Logo"
							width={160}
							height={160}
							className="rounded-full"
							priority
						/>
					</Link>

					{/* Links Desktop */}
					<div className="hidden md:flex items-center space-x-8 font-medium">
						{links.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className="hover:text-white/80 transition-colors">
								{label}
							</Link>
						))}
						<Link
							href="https://wa.me/+573245837514"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white text-sky-500 px-5 py-2 rounded-xl font-semibold shadow hover:bg-sky-100 transition">
							Cotizar
						</Link>
					</div>

					{/* Botón móvil */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							aria-label="Abrir menú"
							className="p-2 rounded hover:bg-sky-500/20 transition">
							{menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Overlay solo debajo del navbar */}
			{menuOpen && (
				<div
					className="fixed left-0 right-0 top-20 bottom-0 bg-black/40 z-40 md:hidden"
					onClick={() => setMenuOpen(false)}
				/>
			)}

			{/* Menú móvil - despliegue desde abajo del navbar */}
			<div
				className={`md:hidden fixed top-20 left-0 w-full bg-sky-400 text-white overflow-hidden z-50 transition-all duration-300 ${
					menuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
				}`}>
				<div className="flex flex-col items-center space-y-6">
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							onClick={() => setMenuOpen(false)}
							className="text-lg font-medium hover:opacity-80">
							{label}
						</Link>
					))}
					<Link
						href="https://wa.me/+573245837514"
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => setMenuOpen(false)}
						className="bg-white text-sky-500 px-6 py-2 rounded-xl font-semibold shadow hover:bg-sky-100 transition">
						Cotizar
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
