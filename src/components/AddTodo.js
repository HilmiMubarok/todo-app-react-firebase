import React from 'react';

import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react';

export default function AddTodo() {
	const [ title, setTitle ] = React.useState('');
	const [ loading, SetLoading ] = React.useState(false);
	const [ isOpen, setIsOpen ] = React.useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const handleSubmit = async (e) => {
		SetLoading(true);
		e.preventDefault();
		if (title !== '') {
			await addDoc(collection(db, 'todos'), {
				title,
				completed: false
			});
			setTitle('');
		}
		SetLoading(false);
	};

	return (
		<React.Fragment>
			<div className="flex items-start justify-start my-5">
				<button
					type="button"
					onClick={openModal}
					className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				>
					Add Todo
				</button>
			</div>

			<Transition appear show={isOpen} as={React.Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={React.Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-75" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={React.Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title as="h3" className="text-lg my-5 font-medium leading-6 text-gray-900">
										Add Todo
									</Dialog.Title>
									<div className="mb-2">
										<form onSubmit={handleSubmit}>
											<input
												type="text"
												className="border-2 focus:ring-transparent focus:border-1 rounded-md border-gray-400 p-2 w-full"
												placeholder="Add a new todo"
												value={title}
												onChange={(e) => setTitle(e.target.value)}
											/>
											<div className="mt-5">
												<button
													type="submit"
													className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
													onClick={closeModal}
												>
													{loading ? 'Loading..' : 'Save'}
												</button>
											</div>
										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</React.Fragment>
	);
}
