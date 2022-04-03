/** @format */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Navbar from "../src/components/Navbar";
import Mobilebar from "../src/components/Mobilebar";
import Footer from "../src/components/Footer";
import Main from "../src/components/index/main";

const Home: NextPage = () => {
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
			<Main />
			<Footer />
		</Wrapper>
	);
};

export default Home;

const Wrapper = styled.div`
	margin: 0;
	background-color: #111;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
