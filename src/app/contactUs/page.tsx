import React from 'react';

const page = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div></div>
			<div className="mt-10 w-full max-w-4xl rounded-xl overflow-hidden shadow-xl">
				<h1 className="text-center text-4xl mb-4">UBICACIÓN</h1>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.3110943035963!2d-75.48664464095415!3d10.343683302909287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1745954687924!5m2!1ses-419!2sco"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	);
};

export default page;
