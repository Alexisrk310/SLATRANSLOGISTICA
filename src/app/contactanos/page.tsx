'use client';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
	FaPhoneAlt,
	FaEnvelope,
	FaWhatsapp,
	FaMapMarkerAlt,
	FaPaperPlane,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const ContactPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>();
	const formRef = useRef(null);
	const scope = useGsapReveal<HTMLDivElement>();

	const onSubmit = () => {
		emailjs
			.sendForm(
				'service_0l6rheu',
				'template_axvzoia',
				formRef.current as any,
				'TjewiMush9fCx2oFx'
			)
			.then(
				() => {
					alert('Mensaje enviado con éxito');
					location.reload();
				},
				() => {
					alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
				}
			);

		reset();
	};

	return (
		<div ref={scope} className="min-h-screen overflow-hidden">
			{/* =========== HERO =========== */}
			<section className="relative isolate pt-16 lg:pt-24 pb-16 overflow-hidden">
				<div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
				<div className="absolute inset-0 -z-10 grid-pattern opacity-50 hero-fade-bottom" />
				<div className="absolute inset-x-0 top-0 -z-10 h-[85%] radial-glow" />

				<div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-5">
					<h1
						data-reveal="up"
						className="font-display text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-950 leading-[1.05]">
						<span className="title-gradient">Contáctanos</span>
					</h1>
					<p data-reveal="up" className="text-lg text-slate-600 max-w-2xl">
						¿Tienes preguntas o necesitas más información? Estamos disponibles
						para ayudarte.
					</p>

					<div className="mt-6 grid sm:grid-cols-3 gap-4 w-full max-w-3xl">
						<a
							href="https://wa.me/+573185445210"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-3 rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
							<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 text-lg ring-1 ring-emerald-100 group-hover:scale-110 transition">
								<FaWhatsapp />
							</span>
							<div className="text-left">
								<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
									WhatsApp
								</p>
								<p className="text-sm font-bold text-sky-950">
									+57 318 544 5210
								</p>
							</div>
						</a>
						<a
							href="tel:+573185445210"
							className="group flex items-center gap-3 rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
							<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 text-lg ring-1 ring-sky-100 group-hover:scale-110 transition">
								<FaPhoneAlt />
							</span>
							<div className="text-left">
								<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
									Teléfono
								</p>
								<p className="text-sm font-bold text-sky-950">
									+57 318 544 5210
								</p>
							</div>
						</a>
						<a
							href="mailto:diroperaciones@translogisticasla.com"
							className="group flex items-center gap-3 rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
							<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 text-lg ring-1 ring-cyan-100 group-hover:scale-110 transition">
								<FaEnvelope />
							</span>
							<div className="text-left">
								<p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">
									Correo
								</p>
								<p className="text-sm font-bold text-sky-950 truncate">
									diroperaciones@…
								</p>
							</div>
						</a>
					</div>
				</div>
			</section>

			{/* =========== FORMULARIO =========== */}
			<section className="py-16 lg:py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
					{/* Columna informativa */}
					<aside className="lg:col-span-2 flex flex-col gap-6" data-reveal="up">
						<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 to-sky-800 text-white p-8 shadow-xl">
							<div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
							<div className="relative">
								<h2 className="text-2xl font-extrabold mb-2">
									Hablemos de tu operación
								</h2>
								<p className="text-sky-50/90">
									Cuéntanos qué necesitas mover, almacenar o distribuir y te
									responderemos a la brevedad.
								</p>

								<ul className="mt-8 space-y-5 text-sm">
									<li className="flex items-start gap-3">
										<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
											<FaPhoneAlt />
										</span>
										<div>
											<p className="text-sky-200/80 text-[11px] uppercase tracking-widest font-semibold">
												Teléfono
											</p>
											<a
												href="tel:+573185445210"
												className="font-semibold hover:underline">
												+57 318 544 5210
											</a>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
											<FaEnvelope />
										</span>
										<div>
											<p className="text-sky-200/80 text-[11px] uppercase tracking-widest font-semibold">
												Correo
											</p>
											<a
												href="mailto:diroperaciones@translogisticasla.com"
												className="font-semibold hover:underline break-all">
												diroperaciones@translogisticasla.com
											</a>
										</div>
									</li>
									<li className="flex items-start gap-3">
										<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
											<FaMapMarkerAlt />
										</span>
										<div>
											<p className="text-sky-200/80 text-[11px] uppercase tracking-widest font-semibold">
												Ubicación
											</p>
											<p className="font-semibold">Cartagena, Colombia</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</aside>

					{/* Formulario */}
					<div className="lg:col-span-3" data-reveal="up">
						<div className="rounded-3xl bg-white border border-sky-100 shadow-xl p-6 sm:p-10">
							<div className="mb-6">
								<span className="eyebrow">Formulario de contacto</span>
								<h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-sky-950">
									Escríbenos un mensaje
								</h2>
							</div>

							<form
								ref={formRef}
								onSubmit={handleSubmit(onSubmit)}
								className="grid sm:grid-cols-2 gap-5">
								<div className="flex flex-col sm:col-span-1">
									<label className="mb-2 text-sm font-semibold text-sky-900">
										Nombre
									</label>
									<input
										type="text"
										placeholder="Tu nombre"
										className="px-4 py-3 rounded-xl bg-sky-50/60 border border-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:bg-white transition"
										{...register('name', {
											required: 'El nombre es obligatorio.',
											pattern: {
												value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
												message: 'Solo se permiten letras y espacios.',
											},
										})}
									/>
									{errors.name && (
										<p className="mt-1 text-red-500 text-xs">
											{errors.name.message}
										</p>
									)}
								</div>

								<div className="flex flex-col sm:col-span-1">
									<label className="mb-2 text-sm font-semibold text-sky-900">
										Correo electrónico
									</label>
									<input
										type="email"
										placeholder="tucorreo@ejemplo.com"
										className="px-4 py-3 rounded-xl bg-sky-50/60 border border-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:bg-white transition"
										{...register('email', {
											required: 'El correo es obligatorio.',
											pattern: {
												value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
												message: 'Correo electrónico inválido.',
											},
										})}
									/>
									{errors.email && (
										<p className="mt-1 text-red-500 text-xs">
											{errors.email.message}
										</p>
									)}
								</div>

								<div className="flex flex-col sm:col-span-2">
									<label className="mb-2 text-sm font-semibold text-sky-900">
										Teléfono
									</label>
									<input
										type="tel"
										placeholder="+57"
										className="px-4 py-3 rounded-xl bg-sky-50/60 border border-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:bg-white transition"
										{...register('tel', {
											required: 'El teléfono es obligatorio.',
											pattern: {
												value: /^\d{10}$/,
												message:
													'Debe contener exactamente 10 dígitos numéricos.',
											},
										})}
									/>
									{errors.tel && (
										<p className="mt-1 text-red-500 text-xs">
											{errors.tel.message}
										</p>
									)}
								</div>

								<div className="flex flex-col sm:col-span-2">
									<label className="mb-2 text-sm font-semibold text-sky-900">
										Mensaje
									</label>
									<textarea
										rows={5}
										placeholder="Escribe tu mensaje aquí..."
										className="px-4 py-3 rounded-xl bg-sky-50/60 border border-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 focus:bg-white transition resize-none"
										{...register('description', {
											required: 'El mensaje es obligatorio.',
										})}
									/>
									{errors.description && (
										<p className="mt-1 text-red-500 text-xs">
											{errors.description.message}
										</p>
									)}
								</div>

								<div className="sm:col-span-2 flex items-center justify-end pt-2">
									<button
										type="submit"
										disabled={isSubmitting}
										className="btn-primary disabled:opacity-70 disabled:cursor-wait">
										<FaPaperPlane />
										{isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* =========== MAPA =========== */}
			<section className="py-16 lg:py-20 bg-gradient-to-b from-sky-50/60 to-white" id="ubicacion">
				<div className="max-w-6xl mx-auto px-6">
					<div className="flex flex-col items-center text-center gap-3 mb-10">
						<span className="eyebrow" data-reveal="up">
							Dónde estamos
						</span>
						<h2
							data-reveal="up"
							className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-950">
							¿Dónde estamos ubicados?
						</h2>
					</div>
					<div
						data-reveal="up"
						className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-sky-200 bg-white">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.3110943035963!2d-75.48664464095415!3d10.343683302909287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1745954687924!5m2!1ses-419!2sco"
							width="100%"
							height="480"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
