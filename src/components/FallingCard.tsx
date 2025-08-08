import React from 'react';
import { motion } from 'framer-motion';

const FallingCard = ({
	index,
	children,
	disabled = false,
}: {
	index: number;
	children: React.ReactNode;
	disabled?: boolean;
}) => {
	return (
		<motion.div
			key={index}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={!disabled ? { y: -10 } : {}}
			className="group">
			{children}
		</motion.div>
	);
};

export default FallingCard;
