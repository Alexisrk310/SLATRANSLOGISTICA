import { ServicioHeroProps } from '@/interfaces/services.Interfaces';

const ServicioHero: React.FC<ServicioHeroProps> = ({
	title,
	description,
	className = '',
	icon,
	imageUrl,
	features,
	reversed = false,
}) => {
	return (
		<section
			className={`${className} w-full bg-sky-50 text-gray-800 py-16 px-6`}>
			<div
				className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
					reversed ? 'md:flex-row-reverse' : ''
				}`}>
				{/* Imagen */}
				<div className="w-full md:w-1/2">
					<img
						src={imageUrl}
						alt={title}
						className="rounded-xl shadow-lg w-full h-auto object-cover"
					/>
				</div>

				{/* Contenido */}
				<div className="w-full md:w-1/2 px-4">
					<div className="mb-4">{icon}</div>
					<h2 className="text-4xl font-extrabold text-sky-500 drop-shadow-md mb-4">
						{title}
					</h2>
					<p className="text-gray-600 mb-4">{description}</p>
					<ul className="list-disc pl-5 text-gray-700 space-y-2">
						{features.map((feature, idx) => (
							<li key={idx}>{feature}</li>
						))}
					</ul>
					<button className="mt-8 px-6 py-3 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 transition duration-300 cursor-pointer">
						Prestar servicios
					</button>
				</div>
			</div>
		</section>
	);
};

export default ServicioHero;
