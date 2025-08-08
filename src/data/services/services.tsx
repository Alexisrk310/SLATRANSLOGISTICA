// data/services.js
import {
	FaTruckMoving,
	FaWarehouse,
	FaDolly,
	FaLock,
	FaProjectDiagram,
} from 'react-icons/fa';

export const allServices = [
	{
		onClickRef: 'freightForwardingRef',
		icon: <FaTruckMoving size={40} className="text-sky-400" />,
		title: 'Transporte de Carga',
		description:
			'Transporte en contenedores y carga suelta. Actualmente cubrimos rutas locales y regionales.',
	},
	{
		onClickRef: 'storageRef',
		icon: <FaWarehouse size={40} className="text-sky-400" />,
		title: 'Almacenamiento',
		description:
			'Servicio de almacenamiento en bodegas para todo tipo de mercancías.',
	},
	{
		onClickRef: 'loadingAndUnloadingRef',
		icon: <FaDolly size={40} className="text-sky-400" />,
		title: 'Cargue y Descargue',
		description:
			'Cargue y descargue de mercancías con máquinas especializadas.',
	},
	{
		disabled: true,
		icon: <FaLock size={40} className="text-gray-700" />,
		title: 'PRONTO',
		description: '',
	},
	{
		onClickRef: 'integralLogisticsRef',
		icon: <FaProjectDiagram size={40} className="text-sky-400" />,
		title: 'Logística',
		description:
			'Acompañamiento logístico, consolidación, desconsolidación, empaque, y vaciado de contenedores.',
	},
	{
		disabled: true,
		icon: <FaLock size={40} className="text-gray-700" />,
		title: 'PRONTO',
		description: '',
	},
];
