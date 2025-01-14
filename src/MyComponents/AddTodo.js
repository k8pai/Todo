/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
// import  myImage  from "./logo1.png";
import './cssComp/style.css';

export const AddTodo = ({ addTodo, todo, setTodo }) => {
	// updated function name to avoid ambiguity
	const handleSubmit = (event) => {
		event.preventDefault();
		const { id, title, desc } = todo;
		// if (!title || !desc) {
		//	 alert('Title or Description cannot be blank');
		// } else {
		// 	 addTodo(value);
		// 	 setValue({
		// 		title: '',
		// 		desc: '',
		// 	 });
		// }
		if (title && desc) {
			console.log('acceptable');
			addTodo(id, title, desc);
			setTodo({
				title: '',
				desc: '',
			});
			return;
		}
		alert('Title or Description cannot be blank');
	};

	const handleChange = (event) => {
		const { name } = event.target;
		// console.log(name);
		setTodo((elem) => {
			return { ...elem, [name]: event.target.value };
		});
	};

	return (
		<>
			<div className="addTodoContainer">
				{/* <img src={myImage} alt="My Image"  style={{ display: 'block', margin: '0 auto', width:"20vh"}} /> */}
				<div className="container formContainer my-5">
					{/* updated with a logical function name */}
					<form onSubmit={handleSubmit} className="form">
						<div className="mb-3">
							<label htmlFor="title" className="form-label">
								Task Title
							</label>
							<input
								type="text"
								name="title"
								value={todo.title}
								onChange={handleChange}
								className="form-control"
								id="addTitle"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="desc" className="form-label">
								Sub Task
							</label>
							<input
								type="text"
								name="desc"
								value={todo.desc}
								onChange={handleChange}
								className="form-control"
								id="desc"
							/>
						</div>

						<button type="submit" className="addBtn">
							+
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
