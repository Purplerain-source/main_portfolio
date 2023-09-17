import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">I'm not just any frontend developer – I'm your friendly neighborhood frontend developer, swinging into action! With a passion for pixel-perfect designs and smooth user interactions, I'm here to bring a touch of warmth, creativity, and a swingin' good time to your web projects.				</p>
				<a
					href="mailto:webcifar.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					oladapoomoworare@gmail.com@gmail.com
				</a>
				<a
					href="tel:+17789849315"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					Call me : <span>
				<a
					href="tel:+17789849315"
					className=" mt-3 text-md md:text-lg text-gray-800 dark:text-gray-600 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					+1 (778)-984-9315
				</a>
				</span> 
				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
