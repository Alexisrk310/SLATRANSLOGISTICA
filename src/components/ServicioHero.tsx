import { ServicioHeroProps } from '@/interfaces/services.Interfaces';
import Image from 'next/image';
import { TbHandFingerDown } from 'react-icons/tb';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';

const ServicioHero: React.FC<ServicioHeroProps> = ({
	title,
	description,
	subDescription,
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
			className={`${className} relative scroll-mt-28 py-16 sm:py-20`}>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
			<div
				className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-start ${
					reversed ? 'lg:[&>*:first-child]:order-2' : ''
				}`}>
				{/* Imagen (sticky mientras se recorre el contenido) */}
				<div
					className="relative lg:sticky lg:top-28 self-start"
					data-reveal="scale">
					<div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-200/50 via-cyan-200/40 to-transparent blur-xl -z-10 pointer-events-none" />
					<div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-sky-100 shadow-[0_30px_80px_-30px_rgba(2,132,199,0.45)]">
							<Image
								fill
								sizes="(min-width: 1024px) 50vw, 100vw"
								src={imageUrl}
								alt={title}
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 via-transparent to-transparent" />
						</div>
					</div>

					{/* Contenido */}
					<div className="w-full">
						<div className="flex items-center gap-3 mb-5" data-reveal="up">
							<span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white shadow-md">
								{icon}
							</span>
							<span className="eyebrow !text-sky-600">Servicio</span>
						</div>

						<h2
							data-reveal="up"
							className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950 text-balance leading-tight mb-4">
							{title}
						</h2>

						<p
							data-reveal="up"
							className="text-base sm:text-lg text-slate-600 mb-5 whitespace-pre-line leading-relaxed">
							{description}
						</p>

						<p
							data-reveal="up"
							className="inline-flex items-center gap-2 text-sm sm:text-base text-sky-700 font-bold uppercase tracking-wider mb-8 whitespace-pre-line">
							{subDescription}
							<TbHandFingerDown className="text-2xl animate-bounce" />
						</p>

						<div data-reveal-group className="space-y-6">
							{features.map((group, idx) => (
								<div
									key={idx}
									className="rounded-2xl border border-sky-100 bg-white/70 backdrop-blur p-5 shadow-sm">
									<h3 className="text-base sm:text-lg font-bold text-sky-800 mb-3">
										{group.title}
									</h3>
									<ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2 text-sm sm:text-base text-slate-700">
										{group.items.map((item, itemIdx) => (
											<li
												key={itemIdx}
												className="flex items-start gap-2 leading-snug">
												<FaCheck className="mt-1 text-sky-500 shrink-0" />
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>

						<a
							href="https://api.whatsapp.com/send/?phone=+573185445210&text=¿Hola como estás?, me gustaría prestar tus servicios"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-primary mt-8">
							<FaWhatsapp /> Prestar servicios
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicioHero;
