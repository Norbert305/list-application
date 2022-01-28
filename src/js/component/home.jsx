import React from "react";
import { MyList } from "./list";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5 box">
			<h5 className="text-center ">MyList</h5>
			<div className="text-center ">
				<MyList />
			</div>
		</div>
	);
};

export default Home;
