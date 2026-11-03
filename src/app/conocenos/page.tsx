'use client';
import React from 'react';
import { companyInfo, companyValues } from '@/data/company/companyInfo';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import {
	FaBullseye,
	FaEye,
	FaShieldAlt,
	FaHandshake,
	FaUsers,
	FaCogs,
	FaSyncAlt,
	FaCheckCircle,
} from 'react-icons/fa';

const valueIcons = [
	FaCheckCircle,
	FaShieldAlt,
	FaHandshake,
	FaCogs,
	FaUsers,
	FaSyncAlt,
];

const About = () => {
	const scope = useGsapReveal<HTMLDivElement>();

	return (
		<div ref={scope} className="min-h-screen flex flex-col overflow-hidden">
			{/* ============== HERO ============== */}
			<section className="relative isolate pt-16 lg:pt-24 pb-24 overflow-hidden">
				<div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
				<div className="absolute inset-0 -z-10 grid-pattern opacity-50 hero-fade-bottom" />
				<div className="absolute inset-x-0 top-0 -z-10 h-[85%] radial-glow" />

				<div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-5">
					<h1
						data-reveal="up"
						className="font-display text-balance text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-sky-950 leading-[1.05]">
						Somos <span className="title-gradient">TRANSLOGÍSTICA SLA</span>
					</h1>
					<p
						data-reveal="up"
						className="text-lg text-slate-600 leading-relaxed max-w-3xl">
						Somos una empresa dedicada al transporte terrestre y la logística,
						enfocada en brindar soluciones eficientes, seguras y adaptadas a las
						necesidades de cada cliente. Ofrecemos un servicio de calidad
						respaldado por tecnología avanzada y un equipo profesional
						altamente capacitado, garantizando entregas puntuales, confiables y
						en óptimas condiciones.
					</p>
				</div>
			</section>

			{/* ============== VISIÓN · MISIÓN ============== */}
			<section className="py-16 lg:py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-12">
						<span className="eyebrow" data-reveal="up">
							Nuestra razón de ser
						</span>
						<h2
							data-reveal="up"
							className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950 text-balance">
							Visión, misión y valores
						</h2>
						<p data-reveal="up" className="text-slate-600">
							Enfoque en servicios logísticos, transporte y operación en zona
							franca.
						</p>
					</div>

					<div data-reveal-group className="grid md:grid-cols-2 gap-6">
						{companyInfo.map((item, index) => {
							const Icon = item.title.toLowerCase().startsWith('mis')
								? FaBullseye
								: FaEye;
							return (
								<article
									key={index}
									className="group relative overflow-hidden rounded-3xl bg-white border border-sky-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
									<div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-sky-100/60 blur-3xl opacity-70 group-hover:opacity-100 transition" />
									<div className="relative flex items-start gap-5">
										<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white text-xl shadow-md">
											<Icon />
										</span>
										<div>
											<h3 className="text-2xl font-extrabold text-sky-950">
												{item.title}
											</h3>
											<p className="mt-3 text-slate-600 leading-relaxed">
												{item.text}
											</p>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			{/* ============== VALORES ============== */}
			<section className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/60 to-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3 mb-14">
						<span className="eyebrow" data-reveal="up">
							Lo que nos define
						</span>
						<h2
							data-reveal="up"
							className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950">
							Nuestros <span className="title-gradient">valores</span>
						</h2>
					</div>

					<div
						data-reveal-group
						className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{companyValues.map((value, index) => {
							const Icon = valueIcons[index % valueIcons.length];
							return (
								<article
									key={index}
									className="group relative rounded-2xl bg-white border border-sky-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
									<div className="flex items-center gap-4 mb-4">
										<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 text-lg ring-1 ring-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-500">
											<Icon />
										</span>
										<span className="text-xs uppercase tracking-widest font-bold text-sky-500">
											Valor {String(index + 1).padStart(2, '0')}
										</span>
									</div>
									<h3 className="text-lg font-bold text-sky-950 leading-snug">
										{value.title.replace(/^\d+\.\s*/, '')}
									</h3>
									<p className="mt-3 text-sm text-slate-600 leading-relaxed">
										{value.text}
									</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
