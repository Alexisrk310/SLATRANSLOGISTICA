// components/ConductorProfileCard.tsx
import React from 'react';
import Image from 'next/image';

interface ConductorProfileCardProps {
	nombre: string;
	descripcion: string;
	imageSrc: string;
}

const ProfileCard: React.FC<ConductorProfileCardProps> = ({
	nombre,
	descripcion,
	imageSrc,
}) => {
	return (
		<div className="flex items-center justify-between bg-white border border-[#38bdf8] rounded-xl shadow-md p-4 w-full max-w-4xl">
			<div className="flex flex-col justify-center gap-2">
				<h2 className="text-[#38bdf8] text-lg font-semibold">{nombre}</h2>
				<p className="text-gray-700 text-sm">{descripcion}</p>
			</div>
			<div className="ml-4">
				<Image
					src={imageSrc}
					alt={nombre}
					width={80}
					height={80}
					className="rounded-full object-cover"
				/>
			</div>
		</div>
	);
};

export default ProfileCard;
