// components/AvatarCard.tsx
import React from 'react';
import Image from 'next/image';
import { AvatarCardProps } from '@/interfaces/card.Interface';

const AvatarCardHorizontal: React.FC<AvatarCardProps> = ({
	name,
	role,
	description,
	imageSrc,
}) => {
	return (
		<div className="bg-white rounded-xl shadow-lg p-6 flex items-center max-w-3xl mx-auto gap-6">
			<div className="flex-1 text-left">
				<h2 className="text-[#38bdf8] font-semibold text-xl">{name}</h2>
				<h3 className="text-gray-600 mb-2">{role}</h3>
				<p className="text-gray-700 text-sm">{description}</p>
			</div>
			<div className="flex-shrink-0">
				<Image
					src={imageSrc}
					alt={name}
					width={100}
					height={100}
					className="rounded-full object-cover"
				/>
			</div>
		</div>
	);
};

export default AvatarCardHorizontal;
