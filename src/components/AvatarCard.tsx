// components/AvatarCard.tsx
import React from 'react';
import Image from 'next/image';
import { AvatarCardProps } from '@/interfaces/card.Interface';
import { FaWhatsapp } from 'react-icons/fa';
import FallingSection from './FallingSection';

const AvatarCard: React.FC<AvatarCardProps> = ({
	name,
	role,
	description,
	tel,
	imageSrc,
}) => {
	return (
		<FallingSection>
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
				<h3 className="text-gray-600 mb-2 font-light">{role}</h3>

				<a
					href={`https://wa.me/+57${tel}`}
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-600  font-light flex items-center justify-center mb-2">
					<FaWhatsapp className="mr-1" />
					{tel}
				</a>

				<p className="text-gray-700 text-sm">{description}</p>
			</div>
		</FallingSection>
	);
};

export default AvatarCard;
