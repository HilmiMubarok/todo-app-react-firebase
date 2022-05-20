import React from 'react';

export default function Title() {
	return (
		<React.Fragment>
			<h5 className="mb-3 text-center text-base font-extrabold text-gray-900 lg:text-3xl dark:text-white">
				Todo App
			</h5>
			<p className="text-sm font-normal text-center text-gray-500 dark:text-gray-400">
				A Simple Task Management App by
				<a
					href="https://hilmimubarok.com"
					className="ml-1 font-bold text-teal-500"
					target="_blank"
					rel="noreferrer"
				>
					HilmiMubarok
				</a>. built with ReactJS, Firebase, and TailwindCSS
			</p>
		</React.Fragment>
	);
}
