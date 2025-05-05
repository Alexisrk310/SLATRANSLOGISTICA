export interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	className?: string;
	onClick?: () => void;
	description: string;
	disabled?: boolean;
}

// interfaces/services.Interfaces.ts
export interface FeatureGroup {
	title: string;
	items: string[];
}

export interface ServicioHeroProps {
	title: string;
	description: string;
	subDescription?: string;
	className?: string;
	icon: React.ReactNode;
	imageUrl: string;
	features: FeatureGroup[];
	reversed?: boolean;
	ref?: React.Ref<HTMLDivElement>;
}
