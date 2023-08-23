import React from 'react';

const InnerPage = ({ params }) => {
	return (
		<div>
			InnerPage
			<p>The id is {params.id}</p>
		</div>
	);
};

export default InnerPage;
