'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useLayoutEffect, useState } from 'react';

interface Brand {
	id: string;
	src: string;
	alt: string;
}

interface BrandsCarouselProps {
	brands: Brand[];
	speed?: number; // px por segundo
}

const BrandsCarousel: React.FC<BrandsCarouselProps> = ({
	brands,
	speed = 50,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [itemsToRender, setItemsToRender] = useState<Brand[]>([]);

	useLayoutEffect(() => {
		if (!containerRef.current) return;

		const containerWidth = containerRef.current.offsetWidth;
		const singleSetWidth = brands.length * 160; // 160px = ancho aprox de cada img (w-40)
		const minRepetitions = Math.ceil((containerWidth * 2) / singleSetWidth);

		// repetimos lo suficiente para llenar siempre
		let repeated: Brand[] = [];
		for (let i = 0; i < minRepetitions; i++) {
			repeated = [...repeated, ...brands];
		}
		setItemsToRender(repeated);
	}, [brands]);

	const totalWidth = itemsToRender.length * 160; // ancho total estimado

	return (
		<div ref={containerRef} className="w-full overflow-hidden bg-white pt-8">
			{itemsToRender.length > 0 && (
				<motion.div
					className="flex gap-8 px-6"
					animate={{ x: [0, -totalWidth / 2] }}
					transition={{
						ease: 'linear',
						duration: totalWidth / 2 / speed, // velocidad constante
						repeat: Infinity,
					}}
					style={{ whiteSpace: 'nowrap' }}>
					{itemsToRender.map((brand, index) => (
						<Image
							width={160}
							height={160}
							key={brand.id + '-' + index}
							src={brand.src}
							alt={brand.alt}
							className="w-40 h-40 object-contain shrink-0"
						/>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default BrandsCarousel;
