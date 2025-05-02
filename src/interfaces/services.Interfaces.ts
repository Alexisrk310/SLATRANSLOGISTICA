export interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
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
	className?: string;
	icon: React.ReactNode;
	imageUrl: string;
	features: FeatureGroup[];
	reversed?: boolean;
	ref?: React.Ref<HTMLDivElement>;
}
