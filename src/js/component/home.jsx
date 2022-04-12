import React from "react";
import Header from "./header.jsx";
import AddTask from "./Task.jsx";

const Home = () => {
	return (
		<div className="container">
			<div
				className="block bg-light mx-auto rounded"
				style={{ width: "450px" }}>
				<div className="mb-3 w-50 pb-2 mx-auto mt-4">
					<Header />
					<AddTask />
				</div>
			</div>
		</div>
	);
};

export default Home;
