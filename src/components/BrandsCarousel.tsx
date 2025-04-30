'use client';

import React, { useEffect, useRef } from 'react';

interface Brand {
	id: string;
	src: string;
	alt: string;
}

interface BrandsCarouselProps {
	brands: Brand[];
}

const BrandsCarousel: React.FC<BrandsCarouselProps> = ({ brands }) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const scrollAmount = 0.5;

	useEffect(() => {
		const el = carouselRef.current;
		if (!el) return;

		let animationFrameId: number;

		const scroll = () => {
			if (el.scrollLeft >= el.scrollWidth / 2) {
				el.scrollLeft = 0;
			} else {
				el.scrollLeft += scrollAmount;
			}
			animationFrameId = requestAnimationFrame(scroll);
		};

		animationFrameId = requestAnimationFrame(scroll);

		return () => cancelAnimationFrame(animationFrameId);
	}, []);

	return (
		<div className="w-full overflow-hidden bg-white pt-8">
			<div
				ref={carouselRef}
				className="flex gap-8 px-6 overflow-hidden whitespace-nowrap">
				{[...brands, ...brands, ...brands].map((brand, index) => (
					<img
						key={brand.id + '-' + index}
						src={brand.src}
						alt={brand.alt}
						className="w-50 h-50 object-contain shrink-0"
					/>
				))}
			</div>
		</div>
	);
};

export default BrandsCarousel;
