/** @format */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Mobilebar from "../src/components/Mobilebar";
import Navbar from "../src/components/Navbar";

const About: NextPage = () => {
	const [mobile, setState] = useState(false);
	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900 ? setState(true) : setState(false);
		};
		setResponsiveness();
		window.addEventListener("resize", () => setResponsiveness());
		console.log(mobile);
	}, []);
	return (
		<>
			{mobile ? <Mobilebar /> : <Navbar />}
			<>ddd</>
			<></>
		</>
	);
};

export default About;
