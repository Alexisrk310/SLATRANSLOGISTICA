'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrollProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		const prefersReduced =
			typeof window !== 'undefined' &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReduced) {
			return;
		}

		const lenis = new Lenis({
			duration: 1.1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			touchMultiplier: 1.2,
		});

		// Integración con GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		const tickerCb = (time: number) => {
			lenis.raf(time * 1000);
		};
		gsap.ticker.add(tickerCb);
		gsap.ticker.lagSmoothing(0);

		// Anchors nativos (<a href="#id">) deben seguir funcionando
		const onAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (!target) return;
			const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
			if (!anchor) return;
			const href = anchor.getAttribute('href');
			if (!href || href === '#') return;
			const el = document.querySelector(href);
			if (!el) return;
			e.preventDefault();
			lenis.scrollTo(el as HTMLElement, { offset: -80 });
		};
		document.addEventListener('click', onAnchorClick);

		return () => {
			document.removeEventListener('click', onAnchorClick);
			gsap.ticker.remove(tickerCb);
			lenis.destroy();
		};
	}, []);

	return <>{children}</>;
}
