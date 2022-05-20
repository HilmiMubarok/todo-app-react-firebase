import React from 'react';

function Todo({ todo, toggleComplete, handleDelete, handleEdit }) {
	const [ newTitle, setNewTitle ] = React.useState(todo.title);

	const handleChange = (e) => {
		e.preventDefault();
		if (todo.completed === true) {
			setNewTitle(todo.title);
		} else {
			todo.title = '';
			setNewTitle(e.target.value);
		}
	};
	return (
		<React.Fragment>
			<div className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
				<input
					type="text"
					className="flex-1 ml-3 border-none bg-transparent focus:ring-transparent whitespace-nowrap"
					style={{ textDecoration: todo.completed && 'line-through' }}
					value={todo.title === '' ? newTitle : todo.title}
					onChange={handleChange}
				/>
				<button
					onClick={() => toggleComplete(todo)}
					className="group-hover:inline-flex hidden items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-teal-200 rounded dark:bg-gray-700 dark:text-gray-400"
				>
					{todo.completed ? '✖' : '✓'}
				</button>
				<button
					onClick={() => handleEdit(todo, newTitle)}
					className="group-hover:inline-flex hidden items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-yellow-200 rounded dark:bg-gray-700 dark:text-gray-400"
				>
					✎
				</button>
				<button
					onClick={() => handleDelete(todo.id)}
					className="group-hover:inline-flex hidden items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-red-200 rounded dark:bg-gray-700 dark:text-gray-400"
				>
					✖
				</button>
			</div>
		</React.Fragment>
	);
}

export default Todo;
