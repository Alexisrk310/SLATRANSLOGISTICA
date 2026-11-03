'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook ligero que revela los elementos [data-reveal] dentro del contenedor
 * animando opacidad y translación con GSAP + ScrollTrigger.
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>() {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const scope = ref.current;
		if (!scope) return;

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReduced) return;

		const ctx = gsap.context(() => {
			const items = scope.querySelectorAll<HTMLElement>('[data-reveal]');
			items.forEach((el) => {
				// Si por algún motivo ScrollTrigger no se dispara, no bloquea el contenido
				(el as HTMLElement).style.willChange = 'opacity, transform';
				const type = el.dataset.reveal || 'up';
				const delay = parseFloat(el.dataset.revealDelay || '0');
				const from: gsap.TweenVars = { opacity: 0 };
				if (type === 'up') from.y = 36;
				if (type === 'down') from.y = -36;
				if (type === 'left') from.x = -36;
				if (type === 'right') from.x = 36;
				if (type === 'scale') from.scale = 0.92;

				gsap.from(el, {
					...from,
					duration: 0.9,
					delay,
					ease: 'power3.out',
					clearProps: 'transform,opacity,willChange',
					scrollTrigger: {
						trigger: el,
						start: 'top 92%',
						toggleActions: 'play none none none',
						once: true,
					},
				});
			});

			const groups = scope.querySelectorAll<HTMLElement>('[data-reveal-group]');
			groups.forEach((group) => {
				const children = Array.from(group.children) as HTMLElement[];
				gsap.from(children, {
					opacity: 0,
					y: 32,
					duration: 0.8,
					ease: 'power3.out',
					stagger: 0.08,
					clearProps: 'transform,opacity,willChange',
					scrollTrigger: {
						trigger: group,
						start: 'top 92%',
						toggleActions: 'play none none none',
						once: true,
					},
				});
			});

			// Red de seguridad: tras 3s revelar lo que haya quedado invisible
			const safety = window.setTimeout(() => {
				scope
					.querySelectorAll<HTMLElement>('[data-reveal]')
					.forEach((el) => {
						if (parseFloat(getComputedStyle(el).opacity) < 0.1) {
							gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform' });
						}
					});
				scope
					.querySelectorAll<HTMLElement>('[data-reveal-group]')
					.forEach((group) => {
						Array.from(group.children).forEach((c) => {
							const el = c as HTMLElement;
							if (parseFloat(getComputedStyle(el).opacity) < 0.1) {
								gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: 'transform' });
							}
						});
					});
			}, 3000);

			return () => window.clearTimeout(safety);
		}, scope);

		return () => ctx.revert();
	}, []);

	return ref;
}
