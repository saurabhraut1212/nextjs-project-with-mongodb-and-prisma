'use client';
import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Post = ({ post }) => {
	const [openModalEdit, setOpenModalEdit] = useState(false);
	const [postToEdit, setPostToEdit] = useState(post);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const router = useRouter();

	const handleEditSubmit = () => {
		e.preventDefault();
		axios
			.patch(`/api/posts/${post.id}`, postToEdit)
			.then((res) => console.log(res))
			.finally(() => {
				setOpenModalEdit(false);
				router.refresh();
			});
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPostToEdit((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleDeletePost = (id) => {
		axios
			.delete(`/api/posts/${post.id}`)
			.then((res) => console.log(res))
			.finally(() => {
				setOpenModalEdit(false);
				router.refresh();
			});
	};
	return (
		<li className="p-3 my-5 bg-slate-200" key={post.id}>
			<h1 className="text-2xl font-bold">{post.title}</h1>
			<p>{post.description}</p>
			<div className="pt-5">
				<button
					className="text-blue-700 mr-3"
					onClick={() => setOpenModalEdit(true)}
				>
					Edit
				</button>
				<Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
					<form className="w-full" onSubmit={handleEditSubmit}>
						<h1 className="text-2xl pb-3">Add New Post</h1>
						<input
							type="text"
							name="title"
							id="text"
							placeholder="Enter title"
							className="w-full p-2"
							value={postToEdit.title || ''}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="description"
							id="text"
							placeholder="Enter description"
							className="w-full p-2 my-5"
							value={postToEdit.description || ''}
							onChange={handleChange}
						/>
						<button className="bg-blue-700 text-white px-5 py-2" type="submit">
							Submit
						</button>
					</form>
				</Modal>
				<button
					className="text-red-700 mr-3"
					onClick={() => setOpenModalDelete(true)}
				>
					Delete
				</button>
				<Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
					<h1 className="text-2xl pb-3">
						Are you sure,You want to delete this post
					</h1>
					<div>
						<button
							onClick={() => handleDeletePost(post.id)}
							className="text-blue-700 font-bold mr-5 "
						>
							Yes
						</button>
						<button
							onClick={() => setOpenModalDelete(false)}
							className="text-red-700 font-bold mr-5 "
						>
							No
						</button>
					</div>
				</Modal>
			</div>
		</li>
	);
};

export default Post;
