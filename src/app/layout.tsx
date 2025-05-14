import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppWidget from '@/components/WhatsAppWidget';
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://translogisticasla.com/'),
	title: 'TRANSLOGISTICA SLA S.A.S | Transporte y Logística en Colombia',
	description: `En TRANSLOGISTICA SLA S.A.S nos especializamos en brindar soluciones logísticas de transporte de carga terrestre, con un enfoque en seguridad, puntualidad y eficiencia. Ofrecemos servicios de transporte de mercancías, carga pesada y distribución nacional, garantizando un servicio confiable y profesional en todo el país. ¡Confíe en nosotros para sus necesidades logísticas y de transporte!`,

	icons: {
		icon: '/logos/favicon.ico',
	},

	keywords: [
		// Principales
		'Transporte de carga',
		'Logística Colombia',
		'Transporte terrestre',
		'Envíos nacionales',
		'Transporte de mercancía',
		'Soluciones logísticas',
		'TRANSLOGISTICA SLA',
		'Carga pesada',
		'Distribución segura',
		'Translogisticasla',
		'Translogisticaslasas',
		'Translogistica sla',
		'Translogistica sla sas',
		'Translogistica',
		'Logistica',

		// Transporte de Carga
		'Transporte de carga terrestre en Colombia',
		'Transporte de contenedores en Cartagena',
		'Carga suelta y consolidada',
		'Transporte de mercancías peligrosas',
		'Transporte refrigerado',
		'Transporte de carga nacional e internacional',
		'Traslado de contenedores vacíos y llenos',
		'Transporte de carga urbana y regional',

		// Almacenamiento y Logística
		'Almacenamiento de mercancías en Cartagena',
		'Bodegas seguras para carga peligrosa',
		'Gestión de inventarios y control de stock',
		'Servicios de carga y descarga especializados',
		'Logística integral y distribución',
		'Manejo de carga refrigerada',
		'Logística inversa en Colombia',
		'Servicios de revisión de contenedores',

		// Servicios Especializados
		'Cargue y descargue con maquinaria especializada',
		'Empaque y desconsolidación de mercancías',
		'Asesoría en procesos logísticos',
		'Optimización de costos y tiempos de entrega',
		'Gestión de documentación y aduanas',
		'Soluciones personalizadas para clientes',
		'Transporte puerta a puerta',
		'Servicios de logística para zonas francas',

		// SEO Local y Regional
		'Empresa de logística en Cartagena',
		'Servicios logísticos en Mamonal, Bolívar',
		'Transporte de carga en la Costa Caribe',
		'Operador logístico en Colombia',
		'Soluciones logísticas en Cartagena',
		'Transporte de mercancías en Bolívar',
		'Logística para zonas industriales en Colombia',
		'Transporte de carga en zonas francas',
	],
	applicationName: 'TRANSLOGISTICA SLA S.A.S',
	authors: [
		{ name: 'TRANSLOGISTICA SLA S.A.S', url: 'https://translogisticasla.com' },
	],
	creator: 'TRANSLOGISTICA SLA S.A.S',
	publisher: 'TRANSLOGISTICA SLA S.A.S',
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title: 'TRANSLOGISTICA SLA S.A.S',
		description: `Especialistas en transporte de carga terrestre con cobertura nacional. Seguridad, puntualidad y eficiencia.`,
		url: 'https://www.translogisticasla.com/logos/slatranslogistica.png',
		siteName: 'TRANSLOGISTICA SLA S.A.S',
		images: [
			{
				url: '/logos/slatranslogistica.png',
				width: 1200,
				height: 630,
				alt: 'Logo-TRANSLOGISTICA SLA S.A.S',
			},
		],
		locale: 'es_CO',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'TRANSLOGISTICA SLA S.A.S',
		description: `Ofrecemos soluciones de transporte de carga terrestre en Colombia con altos estándares de seguridad y eficiencia.`,
		images: ['https://www.translogisticasla.com/logos/slatranslogistica.png'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				{children}
				<WhatsAppWidget />
				<Footer />
			</body>
		</html>
	);
}
