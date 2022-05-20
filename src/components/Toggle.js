import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';

export default function Toggle() {
	const [ darkMode, setDarkMode ] = useState(localStorage.getItem('dark') === 'true');

	const handleToggle = () => {
		setDarkMode(!darkMode);
	};

	useEffect(
		() => {
			localStorage.setItem('dark', JSON.stringify(darkMode));
			if (darkMode) {
				document.body.classList.add('dark');
			} else {
				document.body.classList.remove('dark');
			}
		},
		[ darkMode ]
	);

	return (
		<div className="py-16">
			<Switch
				checked={darkMode}
				onChange={handleToggle}
				className={`${darkMode ? 'bg-slate-700' : 'bg-slate-300'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={`${darkMode ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
				/>
			</Switch>
		</div>
	);
}
