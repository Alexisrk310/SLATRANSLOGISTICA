// components/AvatarCard.tsx
import React from 'react';
import Image from 'next/image';
import { AvatarCardProps } from '@/interfaces/card.Interface';

const AvatarCard: React.FC<AvatarCardProps> = ({
	name,
	role,
	description,
	imageSrc,
}) => {
	return (
		<div className="bg-white border border-[#38bdf8] rounded-xl shadow-lg p-6 text-center w-xs max-w-xs">
			<div className="flex justify-center mb-4">
				<Image
					src={imageSrc}
					alt={name}
					width={100}
					height={100}
					className="rounded-full object-cover"
				/>
			</div>
			<h2 className="text-[#38bdf8] font-semibold text-xl">{name}</h2>
			<h3 className="text-gray-600 mb-2">{role}</h3>
			<p className="text-gray-700 text-sm">{description}</p>
		</div>
	);
};

export default AvatarCard;
