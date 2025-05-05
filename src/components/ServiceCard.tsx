import { ServiceCardProps } from '@/interfaces/services.Interfaces';

const ServiceCard = ({
	icon,
	title,
	className = '',
	onClick = () => {},
	description,
	disabled = false,
}: ServiceCardProps) => (
	<div
		onClick={onClick}
		className={`${className} cursor-pointer animated-border-top shadow-md rounded-xl p-6 text-center h-56 transition duration-300 flex flex-col items-center justify-center 
			${
				disabled
					? 'bg-gray-200 opacity-50 pointer-events-none'
					: 'bg-white hover:shadow-lg'
			}`}>
		<div className="mb-4 flex justify-center">{icon}</div>
		<h2 className="text-xl font-semibold text-sky-500 mb-2">{title}</h2>
		<p className="text-gray-600">{description}</p>
	</div>
);

export default ServiceCard;
