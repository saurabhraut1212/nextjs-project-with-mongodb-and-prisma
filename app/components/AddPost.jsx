'use client';
import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddPost = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [inputs, setInputs] = useState({});
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('/api/posts', inputs)
			.then((res) => console.log(res))
			.finally(() => {
				setInputs({});
				setModalOpen(false);
				router.refresh();
			});
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((prevState) => ({ ...prevState, [name]: value }));
	};
	return (
		<div>
			<button
				className="bg-blue-700 text-white p-3 cursor-pointer"
				onClick={() => setModalOpen(true)}
			>
				Add New Post
			</button>
			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
				<form className="w-full" onSubmit={handleSubmit}>
					<h1 className="text-2xl pb-3">Add New Post</h1>
					<input
						type="text"
						name="title"
						id="text"
						placeholder="Enter title"
						className="w-full p-2"
						value={inputs.title || ''}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="description"
						id="text"
						placeholder="Enter description"
						className="w-full p-2 my-5"
						value={inputs.description || ''}
						onChange={handleChange}
					/>
					<button className="bg-blue-700 text-white px-5 py-2" type="submit">
						Submit
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default AddPost;
