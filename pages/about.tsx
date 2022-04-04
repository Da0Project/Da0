/** @format */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";

import Mobilebar from "../src/components/Mobilebar";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Overview from "../src/components/about/Overview";
import Development from "../src/components/about/Development";

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
		<Wrapper>
			{mobile ? <Mobilebar /> : <Navbar />}
			<Overview />
			<Development />
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 0;
	background-color: #111;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export default About;
