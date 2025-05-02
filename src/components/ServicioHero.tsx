import { ServicioHeroProps } from '@/interfaces/services.Interfaces';

const ServicioHero: React.FC<ServicioHeroProps> = ({
	title,
	description,
	className = '',
	icon,
	imageUrl,
	features,
	reversed = false,
	ref = null,
}) => {
	return (
		<section
			ref={ref}
			className={`${className} w-full bg-sky-50 text-gray-800 py-12 sm:py-16 px-4 sm:px-6`}>
			<div
				className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
					reversed ? 'md:flex-row-reverse' : ''
				}`}>
				{/* Imagen */}
				<div className="w-full">
					<img
						src={imageUrl}
						alt={title}
						className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover aspect-[4/3]"
					/>
				</div>

				{/* Contenido */}
				<div className="w-full px-1 sm:px-4">
					<div className="mb-4">{icon}</div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-sky-500 drop-shadow-md mb-4">
						{title}
					</h2>
					<p className="text-base sm:text-lg text-gray-600 mb-6 whitespace-pre-line">
						{description}
					</p>

					{features.map((group, idx) => (
						<div key={idx} className="mb-6">
							<h3 className="text-base sm:text-lg font-semibold text-sky-600 mb-2">
								{group.title}
							</h3>
							<ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
								{group.items.map((item, itemIdx) => (
									<li key={itemIdx}>{item}</li>
								))}
							</ul>
						</div>
					))}

					<a
						href="https://api.whatsapp.com/send/?phone=+573245837514&text=¿Hola como estás?, me gustaría prestar tus servicios"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block mt-6 sm:mt-8 px-5 sm:px-6 py-3 bg-sky-500 text-white rounded-lg shadow-md hover:bg-sky-600 transition duration-300 text-sm sm:text-base">
						Prestar servicios
					</a>
				</div>
			</div>
		</section>
	);
};

export default ServicioHero;
