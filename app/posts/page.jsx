import Link from 'next/link';

async function fetchData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	await new Promise((resolve) => setTimeout(resolve, 3000)); //wait 3 seconds
	return res.json();
}

const Posts = async () => {
	const posts = await fetchData();
	return (
		<div>
			<h1 className="text-4xl">Post page</h1>
			<ul className="flex flex-col gap-5">
				{posts.map((post) => (
					<Link key={post.id} href={`post/${post.id}`}>
						<li className="bg-gray-100 p-5 cursor-pointer">
							<h4 className="text-xl font-bold">{post.title}</h4>
							<p>{post.body}</p>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default Posts;
