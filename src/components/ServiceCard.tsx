import { ServiceCardProps } from '@/interfaces/services.Interfaces';
import FallingSection from './FallingSection';

const ServiceCard = ({
	icon,
	title,
	className = '',
	onClick = () => {},
	description,
	disabled = false,
}: ServiceCardProps) => (
	<FallingSection>
		<button
			type="button"
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
			className={`${className} group relative w-full text-left overflow-hidden rounded-2xl border p-6 h-60 flex flex-col items-start justify-between transition-all duration-500 ${
				disabled
					? 'bg-slate-100/60 border-slate-200 text-slate-400 cursor-not-allowed'
					: 'bg-white border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-300 cursor-pointer'
			}`}>
			{!disabled && (
				<span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-300 via-sky-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition" />
			)}
			<span
				className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-colors duration-500 ${
					disabled
						? 'bg-slate-200 text-slate-400'
						: 'bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-100 text-sky-600 group-hover:text-sky-700'
				}`}>
				{icon}
			</span>
			<div>
				<h3
					className={`text-lg font-extrabold ${
						disabled ? 'text-slate-400' : 'text-sky-950'
					}`}>
					{title}
				</h3>
				<p
					className={`mt-2 text-sm leading-relaxed ${
						disabled ? 'text-slate-400' : 'text-slate-600'
					}`}>
					{description}
				</p>
			</div>
			{!disabled && (
				<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 group-hover:text-sky-800 transition">
					Ver detalle
					<span className="transition-transform duration-500 group-hover:translate-x-1">
						→
					</span>
				</span>
			)}
		</button>
	</FallingSection>
);

export default ServiceCard;
