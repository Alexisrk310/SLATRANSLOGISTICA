'use client';

import { useEffect, useRef } from 'react';

type Props = {
	children: React.ReactNode;
};

export default function FallingSection({ children }: Props) {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.remove('fall');
					void el.offsetWidth;
					el.classList.add('fall');
				}
			},
			{ threshold: 0.4 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className="falling-container">
			{children}
		</div>
	);
}
