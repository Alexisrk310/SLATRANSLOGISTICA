'use client';
import dynamic from 'next/dynamic';
import type { FloatingWhatsAppProps } from 'react-floating-whatsapp';

const FloatingWhatsApp = dynamic(
	() => import('react-floating-whatsapp').then((mod) => mod.FloatingWhatsApp),
	{ ssr: false }
);

export default function WhatsAppWidget() {
	const props: FloatingWhatsAppProps = {
		accountName: 'SLA TRANSLOGISTICA SAS',
		phoneNumber: '+573245837514',
		chatMessage: 'Hola, ¿en qué puedo ayudarte?',
		statusMessage: 'En línea',
		avatar: '/slatranslogistica.png',
		notificationDelay: 1000,
		notification: true,
		notificationSound: true,
		allowClickAway: true,
		allowEsc: true,
	};

	return <FloatingWhatsApp {...props} />;
}
