// components/AvatarCard.tsx
import React from 'react';
import { AvatarCardProps } from '@/interfaces/card.Interface';
import { FaWhatsapp } from 'react-icons/fa';

const getInitials = (name: string) => {
	const parts = name.trim().split(/\s+/);
	const first = parts[0]?.[0] ?? '';
	const second = parts[1]?.[0] ?? '';
	return (first + second).toUpperCase();
};

const AvatarCard: React.FC<AvatarCardProps> = ({
	name,
	role,
	description,
	tel,
}) => {
	const initials = getInitials(name);

	return (
		<article className="group relative w-full sm:w-72 min-h-[22rem] rounded-3xl bg-white border border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-7 text-center overflow-hidden flex flex-col items-center">
			{/* Decoración */}
			<div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-100/80 to-transparent" />
			<div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl opacity-70 group-hover:opacity-100 transition" />

			{/* Monograma */}
			<div className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-sky-500 via-sky-600 to-cyan-600 text-white font-extrabold text-2xl shadow-lg shadow-sky-500/30 ring-4 ring-white group-hover:scale-105 transition-transform duration-500">
				{initials}
			</div>

			<div className="relative mt-5 flex flex-col flex-1 w-full">
				<h3 className="text-sky-950 font-extrabold text-base leading-snug text-balance">
					{name}
				</h3>

				<p className="mt-2 self-center inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-semibold uppercase tracking-[0.1em] text-balance max-w-full">
					{role}
				</p>

				<p className="mt-4 text-sm text-slate-600 leading-relaxed text-balance">
					{description}
				</p>

				<a
					href={`https://wa.me/+57${tel}`}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-auto pt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition">
					<FaWhatsapp className="text-base" />
					{tel}
				</a>
			</div>

			{/* Línea inferior de marca */}
			<span className="absolute inset-x-6 bottom-0 h-[3px] rounded-t-full bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-500 opacity-70 group-hover:opacity-100 transition" />
		</article>
	);
};

export default AvatarCard;
