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
		<div
			ref={containerRef}
			aria-hidden="true"
			className="relative w-full overflow-hidden select-none pointer-events-none [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]"
			style={{ WebkitUserSelect: 'none', userSelect: 'none' }}>
			{itemsToRender.length > 0 && (
				<motion.div
					className="flex items-center gap-10 py-2"
					animate={{ x: [0, -totalWidth / 2] }}
					transition={{
						ease: 'linear',
						duration: totalWidth / 2 / speed,
						repeat: Infinity,
					}}
					style={{ whiteSpace: 'nowrap' }}>
					{itemsToRender.map((brand, index) => (
						<div
							key={brand.id + '-' + index}
							className="shrink-0 flex items-center justify-center h-28 w-40 rounded-2xl bg-white">
							<Image
								width={160}
								height={160}
								src={brand.src}
								alt={brand.alt}
								draggable={false}
								className="max-h-20 w-auto object-contain opacity-80 grayscale pointer-events-none select-none"
							/>
						</div>
					))}
				</motion.div>
			)}
		</div>
	);
};

export default BrandsCarousel;
