import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="text-3xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
				Welcome To My Personal Portfolio
				</h1>
				<p className="text-md md:text-xl max-w-2xl mb-3 text-gray-600 dark:text-gray-300">
				Hello, my name is Xander and I am a frontend developer with a passion for creating visually appealing and user-friendly websites. With 5 years of experience in the field, I have honed my skills in HTML, CSS, JavaScript and React to bring my clients' ideas to life. My goal is to always deliver high-quality and responsive websites that meet the needs of both the user and the client. Whether it's a simple brochure website or a complex e-commerce platform, I am committed to creating a seamless and enjoyable experience for everyone who visits.</p>
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See Works
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
