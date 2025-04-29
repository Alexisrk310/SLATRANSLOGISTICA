import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="bg-sky-400 text-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex items-center">
						<Image
							src="/slatranslogistica-logo.png" // Cambia esto por tu ruta local o remota
							alt="Logo"
							width={300}
							height={300}
							className="mr-2 rounded-full"
						/>
					</div>

					{/* Links */}
					<div className="hidden md:flex space-x-6">
						<Link href="#inicio" className="hover:text-white/80 transition">
							Inicio
						</Link>
						<Link
							href="#caracteristicas"
							className="hover:text-white/80 transition">
							Servicios
						</Link>
						<Link href="#precios" className="hover:text-white/80 transition">
							Acerca de mi
						</Link>
						<Link href="#contacto" className="hover:text-white/80 transition">
							Contacto
						</Link>
					</div>

					{/* Botón CTA */}
					<div className="hidden md:block">
						<Link
							href="#registro"
							className="bg-white text-sky-500 px-4 py-2 rounded-xl font-semibold shadow hover:bg-sky-100 transition">
							Comenzar
						</Link>
					</div>
				</div>
			</div>  
		</nav>
	);
};

export default Navbar;
