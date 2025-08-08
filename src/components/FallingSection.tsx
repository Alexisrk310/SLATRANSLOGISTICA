'use client';

import { motion } from 'framer-motion';

type Props = {
	children: React.ReactNode;
};

export default function FallingSection({ children }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -80 }} // Empieza arriba y transparente
			whileInView={{ opacity: 1, y: 0 }} // Baja y aparece
			transition={{
				duration: 0.8,
				ease: [0.25, 0.8, 0.25, 1], // Easing suave tipo "rebote natural"
			}}
			viewport={{ once: true, amount: 0.4 }} // Solo una vez, al bajar
			className="falling-container">
			{children}
		</motion.div>
	);
}
