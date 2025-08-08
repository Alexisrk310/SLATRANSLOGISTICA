'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="bg-[#0ea5e9] text-white shadow-md w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/logos/logo-dark.png"
							alt="Logo"
							width={180}
							height={180}
							className="mr-2 rounded-full"
							priority
						/>
					</Link>

					{/* Desktop Links */}
					<div className="hidden md:flex space-x-6">
						<Link href="/" className="hover:text-white/80 transition">
							Inicio
						</Link>
						<Link href="/servicios" className="hover:text-white/80 transition">
							Servicios
						</Link>
						<Link href="/conocenos" className="hover:text-white/80 transition">
							Conócenos
						</Link>
						<Link
							href="/contactanos"
							className="hover:text-white/80 transition">
							Contáctanos
						</Link>
					</div>

					{/* Desktop Button */}
					<div className="hidden md:block">
						<Link
							href="https://wa.me/+573245837514"
							rel="noopener noreferrer"
							target="_blank"
							className="bg-white text-sky-500 px-4 py-2 rounded-xl font-semibold shadow hover:bg-sky-100 transition">
							Cotizar
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={toggleMenu} aria-label="Toggle menu">
							{menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Side Menu */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-sky-500 text-white z-40 transform transition-transform duration-300 ease-in-out ${
					menuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}>
				<div className="flex flex-col p-6 space-y-6 pt-20">
					<Link
						href="/"
						onClick={toggleMenu}
						className="text-lg hover:opacity-80">
						Inicio
					</Link>
					<Link
						href="/servicios"
						onClick={toggleMenu}
						className="text-lg hover:opacity-80">
						Servicios
					</Link>
					<Link
						href="/conocenos"
						onClick={toggleMenu}
						className="text-lg hover:opacity-80">
						Conócenos
					</Link>
					<Link
						href="/contactanos"
						onClick={toggleMenu}
						className="text-lg hover:opacity-80">
						Contáctanos
					</Link>
					<Link
						href="https://wa.me/+573245837514"
						rel="noopener noreferrer"
						target="_blank"
						onClick={toggleMenu}
						className="bg-white text-sky-500 px-4 py-2 rounded-xl font-semibold shadow hover:bg-sky-100 transition">
						Cotizar
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
