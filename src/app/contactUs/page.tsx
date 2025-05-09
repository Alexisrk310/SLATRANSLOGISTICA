'use client';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import FallingSection from '@/components/FallingSection';
import emailjs from '@emailjs/browser';
const ContactPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();
	const formRef = useRef(null);

	const onSubmit = () => {
		// const message = `Nombre: ${data.name}\n\nCorreo: ${data.email}\n\nTeléfono: ${data.tel}\n\nMensaje: ${data.description}`;
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
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<section className="bg-sky-400 text-white py-20 px-6 flex flex-col items-center text-center">
				<FallingSection>
					<h1 className="text-5xl font-bold mb-4">Contáctanos</h1>
					<p className="text-xl max-w-2xl">
						¿Tienes preguntas o necesitas más información? Estamos disponibles
						para ayudarte.
					</p>
				</FallingSection>
				<div className="mt-8 flex flex-col md:flex-row gap-6">
					<a
						href="https://wa.me/+573245837514"
						target="_blank"
						className="flex items-center gap-2 bg-white text-sky-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
						<FaWhatsapp /> WhatsApp
					</a>
					<a
						href="tel:+573245837514"
						className="flex items-center gap-2 border border-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-300 transition">
						<FaPhoneAlt /> Llamar
					</a>
					<a
						href="mailto:info@translogisticasla.com"
						className="flex items-center gap-2 bg-sky-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-700 transition">
						<FaEnvelope /> Correo
					</a>
				</div>
			</section>

			<section className="py-16 px-6 bg-white text-center">
				<FallingSection>
					<h2 className="text-4xl font-bold text-sky-600 mb-10">
						Formulario de Contacto
					</h2>
				</FallingSection>
				<form
					ref={formRef}
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-3xl mx-auto space-y-6 text-left">
					<div className="flex flex-col">
						<label className="mb-2 font-medium text-sky-700">Nombre</label>
						<input
							type="text"
							placeholder="Tu nombre"
							className="p-3 border border-gray-300 rounded-xl focus:outline-sky-400"
							{...register('name', {
								required: 'El nombre es obligatorio.',
								pattern: {
									value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
									message: 'Solo se permiten letras y espacios.',
								},
							})}
						/>
						{errors.name && (
							<p className="text-red-500 text-sm">{errors.name.message}</p>
						)}
					</div>

					<div className="flex flex-col">
						<label className="mb-2 font-medium text-sky-700">
							Correo electrónico
						</label>
						<input
							type="email"
							placeholder="tucorreo@ejemplo.com"
							className="p-3 border border-gray-300 rounded-xl focus:outline-sky-400"
							{...register('email', {
								required: 'El correo es obligatorio.',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Correo electrónico inválido.',
								},
							})}
						/>
						{errors.email && (
							<p className="text-red-500 text-sm">{errors.email.message}</p>
						)}
					</div>

					<div className="flex flex-col">
						<label className="mb-2 font-medium text-sky-700">Teléfono</label>
						<input
							type="tel"
							placeholder="+57"
							className="p-3 border border-gray-300 rounded-xl focus:outline-sky-400"
							{...register('tel', {
								required: 'El teléfono es obligatorio.',
								pattern: {
									value: /^\d{10}$/,
									message: 'Debe contener exactamente 10 dígitos numéricos.',
								},
							})}
						/>
						{errors.tel && (
							<p className="text-red-500 text-sm">{errors.tel.message}</p>
						)}
					</div>

					<div className="flex flex-col">
						<label className="mb-2 font-medium text-sky-700">Mensaje</label>
						<textarea
							rows={5}
							placeholder="Escribe tu mensaje aquí..."
							className="p-3 border border-gray-300 rounded-xl focus:outline-sky-400"
							{...register('description', {
								required: 'El mensaje es obligatorio.',
							})}
						/>
						{errors.description && (
							<p className="text-red-500 text-sm">
								{errors.description.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="w-full md:w-auto bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition font-semibold">
						Enviar mensaje
					</button>
				</form>
			</section>

			<section className="py-16 px-6 bg-gray-100" id="ubicacion">
				<FallingSection>
					<h2 className="text-4xl font-bold text-center text-sky-600 mb-10">
						¿Dónde Estamos Ubicados?
					</h2>
				</FallingSection>
				<div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-sky-400">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.3110943035963!2d-75.48664464095415!3d10.343683302909287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1745954687924!5m2!1ses-419!2sco"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
