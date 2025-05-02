export interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	disabled?: boolean;
}

export interface ServicioHeroProps {
	title: string;
	description: string;
	className?: string;
	icon: React.ReactNode;
	imageUrl: string;
	features: string[];
	reversed?: boolean;
}
