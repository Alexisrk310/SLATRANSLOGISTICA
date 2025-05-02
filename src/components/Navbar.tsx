'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="bg-sky-400 text-white shadow-md w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex items-center">
						<Image
							src="/logos/logo-dark.png"
							alt="Logo"
							width={180}
							height={180}
							className="mr-2 rounded-full"
						/>
					</div>

					{/* Desktop Links */}
					<div className="hidden md:flex space-x-6">
						<Link href="/" className="hover:text-white/80 transition">
							Inicio
						</Link>
						<Link href="/services" className="hover:text-white/80 transition">
							Servicios
						</Link>
						<Link href="/about" className="hover:text-white/80 transition">
							Conócenos
						</Link>
						<Link href="/contactUs" className="hover:text-white/80 transition">
							Contáctanos
						</Link>
					</div>

					{/* Desktop Button */}
					<div className="hidden md:block">
						<Link
							href="#registro"
							className="bg-white text-sky-500 px-4 py-2 rounded-xl font-semibold shadow hover:bg-sky-100 transition">
							Comenzar
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button onClick={toggleMenu}>
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
						href="/services"
						onClick={toggleMenu}
						className="text-lg hover:opacity-80">
						Servicios
					</Link>
					<Link
						href="/about"
						onClick={toggleMenu}
						className="text-lg hover:opacity-80">
						Conócenos
					</Link>
					<Link
						href="/contactUs"
						onClick={toggleMenu}
						className="text-lg hover:opacity-80">
						Contáctanos
					</Link>
					<Link
						href="#registro"
						onClick={toggleMenu}
						className="bg-white text-sky-500 px-4 py-2 rounded-xl font-semibold shadow hover:bg-sky-100 transition">
						Comenzar
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
