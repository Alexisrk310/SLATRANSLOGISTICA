'use client';
import AvatarCard from '@/components/AvatarCard';
import BrandsCarousel from '@/components/BrandsCarousel';
import FallingCard from '@/components/FallingCard';
import FallingSection from '@/components/FallingSection';
import { alliedBrandData } from '@/data/brands/alliedBrand.data';
import { teamMembers } from '@/data/team/teamMembers';
import { useGsapReveal } from '@/hooks/useGsapReveal';
import Image from 'next/image';
import Link from 'next/link';
import {
	FaTruckMoving,
	FaWarehouse,
	FaDolly,
	FaProjectDiagram,
	FaArrowRight,
	FaWhatsapp,
} from 'react-icons/fa';

export default function Home() {
	const scope = useGsapReveal<HTMLDivElement>();

	return (
		<div ref={scope} className="overflow-hidden">
			{/* ================= HERO ================= */}
			<section className="relative isolate overflow-hidden">
				<div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
				<div className="absolute inset-0 -z-10 grid-pattern opacity-50 hero-fade-bottom" />
				<div className="absolute inset-x-0 top-0 -z-10 h-[85%] radial-glow" />

				<div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
					<div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
						<div className="lg:col-span-6 flex flex-col gap-6">
							<h1
								data-reveal="up"
								data-reveal-delay="0.05"
								className="font-display text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-sky-950">
								Movemos tu carga con{' '}
								<span className="title-gradient">precisión</span>, seguridad y
								puntualidad.
							</h1>

							<p
								data-reveal="up"
								data-reveal-delay="0.12"
								className="text-lg text-slate-600 leading-relaxed max-w-xl">
								En TRANSLOGÍSTICA SLA nos especializamos en ofrecer soluciones
								integrales de transporte de carga terrestre. Contamos con una
								flota moderna y un equipo capacitado que asegura el cumplimiento
								de los más altos estándares de calidad.
							</p>

							<div
								data-reveal="up"
								data-reveal-delay="0.18"
								className="flex flex-wrap items-center gap-3 pt-2">
								<Link
									href="https://wa.me/+573185445210"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-primary">
									<FaWhatsapp /> Solicitar cotización
								</Link>
								<Link href="/servicios" className="btn-ghost">
									Explorar servicios <FaArrowRight />
								</Link>
							</div>

							<dl
								data-reveal="up"
								data-reveal-delay="0.26"
								className="grid grid-cols-3 gap-6 pt-8 border-t border-sky-100 mt-2">
								<div>
									<dt className="text-xs uppercase tracking-widest text-sky-600 font-semibold">
										Cobertura
									</dt>
									<dd className="mt-1 text-2xl font-extrabold text-sky-950">
										Nacional
									</dd>
								</div>
								<div>
									<dt className="text-xs uppercase tracking-widest text-sky-600 font-semibold">
										Operaciones
									</dt>
									<dd className="mt-1 text-2xl font-extrabold text-sky-950">
										24 / 7
									</dd>
								</div>
								<div>
									<dt className="text-xs uppercase tracking-widest text-sky-600 font-semibold">
										Base
									</dt>
									<dd className="mt-1 text-2xl font-extrabold text-sky-950">
										Cartagena
									</dd>
								</div>
							</dl>
						</div>

						<div
							className="lg:col-span-6 relative"
							data-reveal="scale"
							data-reveal-delay="0.1">
							<div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden shadow-[0_40px_100px_-30px_rgba(2,132,199,0.45)] ring-1 ring-sky-100">
								<Image
									src="/tractocamion/planificacion-de-logistica.png"
									alt="Planificación logística — TRANSLOGISTICA SLA"
									fill
									sizes="(min-width: 1024px) 50vw, 100vw"
									className="object-cover"
									priority
								/>
								<div className="absolute inset-0 bg-gradient-to-tr from-sky-900/30 via-transparent to-transparent" />
							</div>

							{/* Floating card */}
							<div className="hidden sm:flex absolute -bottom-6 -left-6 lg:-left-10 bg-white rounded-2xl shadow-xl border border-sky-100 p-4 pr-5 items-center gap-3 max-w-xs">
								<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 text-xl">
									<FaTruckMoving />
								</span>
								<div>
									<p className="text-sm font-bold text-sky-950">
										Flota moderna
									</p>
									<p className="text-xs text-slate-500">
										Seguimiento y trazabilidad en cada ruta
									</p>
								</div>
							</div>
							<div className="hidden sm:flex absolute -top-5 -right-4 lg:-right-6 bg-white rounded-2xl shadow-xl border border-sky-100 p-4 pr-5 items-center gap-3 max-w-xs">
								<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 text-xl">
									<FaWarehouse />
								</span>
								<div>
									<p className="text-sm font-bold text-sky-950">
										Bodegas seguras
									</p>
									<p className="text-xs text-slate-500">
										Almacenamiento con control integral
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ================= SERVICIOS DESTACADOS ================= */}
			<section className="relative py-20 lg:py-28 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-10">
					<div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4">
						<span className="eyebrow" data-reveal="up">
							Qué hacemos
						</span>
						<h2
							data-reveal="up"
							className="font-display text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950">
							Soluciones logísticas{' '}
							<span className="title-gradient">de principio a fin</span>
						</h2>
						<p data-reveal="up" className="text-slate-600">
							Diseñamos cada operación a la medida de nuestros clientes,
							combinando flota, bodega y gestión en un solo aliado.
						</p>
					</div>

					<div
						data-reveal-group
						className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 items-stretch">
						{[
							{
								icon: <FaTruckMoving />,
								title: 'Transporte de Carga',
								text: 'Contenedores y carga suelta en rutas locales y regionales.',
							},
							{
								icon: <FaWarehouse />,
								title: 'Almacenamiento',
								text: 'Bodegas seguras para todo tipo de mercancías.',
							},
							{
								icon: <FaDolly />,
								title: 'Cargue y Descargue',
								text: 'Maniobras con equipos especializados.',
							},
							{
								icon: <FaProjectDiagram />,
								title: 'Logística Integral',
								text: 'Consolidación, desconsolidación y empaque.',
							},
						].map((s) => (
							<Link
								key={s.title}
								href="/servicios"
								className="group relative card-surface p-6 flex flex-col gap-4 h-full min-h-[260px]">
								<span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100 text-sky-600 text-xl group-hover:text-sky-700 transition">
									{s.icon}
								</span>
								<h3 className="font-bold text-sky-950 text-lg">{s.title}</h3>
								<p className="text-sm text-slate-600 leading-relaxed">
									{s.text}
								</p>
								<span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sky-600 group-hover:text-sky-800 transition">
									Ver detalle
									<FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
								</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* ================= CLIENTES ================= */}
			<section className="py-16 lg:py-20 bg-gradient-to-b from-white to-sky-50/60">
				<div className="max-w-7xl mx-auto px-6 lg:px-10">
					<div className="flex flex-col items-center text-center gap-3 mb-10">
						<span className="eyebrow" data-reveal="up">
							Nuestros clientes
						</span>
						<h2
							data-reveal="up"
							className="font-display text-3xl sm:text-4xl font-extrabold text-sky-950">
							Empresas que confían en nosotros
						</h2>
					</div>

					<FallingSection>
						<div className="rounded-3xl bg-white border border-sky-100 shadow-sm p-6 lg:p-10">
							<BrandsCarousel brands={alliedBrandData} />
						</div>
					</FallingSection>
				</div>
			</section>

			{/* ================= BLOQUE CTA DESTACADO ================= */}
			<section className="relative py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-6 lg:px-10">
					<div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500 text-white shadow-[0_40px_120px_-40px_rgba(2,132,199,0.6)]">
						<div className="absolute inset-0 grid-pattern opacity-[0.14] mix-blend-overlay" />
						<div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
						<div className="relative grid lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 lg:p-16">
							<div className="lg:col-span-7 flex flex-col gap-5">
								<span className="chip bg-white/15 text-white border-white/25">
									<span className="chip-dot !bg-white !shadow-[0_0_0_4px_rgba(255,255,255,0.2)]" />
									Calidad y confianza
								</span>
								<h2 className="font-display text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
									Soluciones eficientes y seguras para optimizar cada proceso
									logístico.
								</h2>
								<p className="text-sky-50/90 text-lg max-w-xl">
									Nuestra misión es proporcionar un servicio confiable y
									puntual. Con un equipo profesional y tecnología avanzada, nos
									comprometemos a que sus cargas lleguen a destino en perfectas
									condiciones y a tiempo.
								</p>
								<div className="flex flex-wrap gap-3 pt-2">
									<Link
										href="/contactanos"
										className="btn-outline-white">
										Contáctanos <FaArrowRight />
									</Link>
									<Link
										href="https://wa.me/+573185445210"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-sky-700 font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition">
										<FaWhatsapp /> Cotizar ahora
									</Link>
								</div>
							</div>
							<div className="lg:col-span-5">
								<div
									className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/25 shadow-2xl"
									data-reveal="scale">
									<Image
										src="/tractocamion/cargue.png"
										alt="Operaciones de cargue"
										fill
										sizes="(min-width: 1024px) 40vw, 100vw"
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ================= COLABORADORES ================= */}
			<section className="py-20 lg:py-28 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-10">
					<div className="flex flex-col items-center text-center gap-3 mb-12">
						<span className="eyebrow" data-reveal="up">
							Equipo
						</span>
						<h2
							data-reveal="up"
							className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950">
							Nuestros <span className="title-gradient">colaboradores</span>
						</h2>
						<p data-reveal="up" className="text-slate-600 max-w-xl">
							Un equipo humano competente que respalda cada etapa de la cadena
							de suministro.
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
						{teamMembers.map((member, index) => (
							<FallingCard index={index} key={index}>
								<AvatarCard {...member} />
							</FallingCard>
						))}
					</div>
				</div>
			</section>

			{/* ================= CIERRE ================= */}
			<section className="pb-24">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<FallingSection>
						<p className="text-xl sm:text-2xl text-slate-700 leading-relaxed text-balance">
							Somos una empresa de transporte y logística dedicada a{' '}
							<span className="text-sky-700 font-semibold">
								conectar destinos
							</span>
							, optimizando cada entrega con compromiso y precisión. Trabajamos
							diariamente para cumplir tus necesidades, llevando tus cargas a
							donde el tiempo y la confianza se encuentran.
						</p>
					</FallingSection>
				</div>
			</section>
		</div>
	);
}
