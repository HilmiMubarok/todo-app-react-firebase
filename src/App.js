import React from 'react';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

import './App.css';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { db } from './firebase';
import Toggle from './components/Toggle';

function App() {
	const [ todos, setTodos ] = React.useState([]);

	React.useEffect(() => {
		const q = query(collection(db, 'todos'));
		const unsub = onSnapshot(q, (querySnapshot) => {
			let todosArray = [];
			querySnapshot.forEach((doc) => {
				todosArray.push({ ...doc.data(), id: doc.id });
			});
			setTodos(todosArray);
		});
		return () => unsub();
	}, []);

	const handleEdit = async (todo, title) => {
		await updateDoc(doc(db, 'todos', todo.id), { title: title });
	};

	const toggleComplete = async (todo) => {
		await updateDoc(doc(db, 'todos', todo.id), { completed: !todo.completed });
	};

	const handleDelete = async (id) => {
		await deleteDoc(doc(db, 'todos', id));
	};

	return (
		<div className="my-bg-light dark:my-bg-dark backdrop-blur-3xl justify-center min-h-screen flex items-center ">
			<div className="fixed -top-10 right-10 hidden md:block">
				<Toggle />
			</div>
			<div className="p-4 max-w-sm md:max-w-xl bg-white bg-opacity-50 rounded-3xl border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700 backdrop-blur-3xl">
				<Title />
				<AddTodo />
				<ul className="my-4 space-y-3">
					{todos.map((todo) => (
						<li key={todo.id}>
							<Todo
								key={todo.id}
								todo={todo}
								toggleComplete={toggleComplete}
								handleDelete={handleDelete}
								handleEdit={handleEdit}
							/>
						</li>
					))}
				</ul>
				<div className="text-center">
					<a
						href="https://github.com/HilmiMubarok/todo-app-react-firebase"
						target="_blank"
						className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
						rel="noreferrer"
					>
						Checkout on Github
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
