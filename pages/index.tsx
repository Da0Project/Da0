/** @format */
import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Navbar from "../src/components/Navbar";
import Mobilebar from "../src/components/Mobilebar";
import Footer from "../src/components/Footer";

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
			<Wrapper>
				<ContentsWrapper>ddd</ContentsWrapper>
				<Grapic />
			</Wrapper>
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
const ContentsWrapper = styled.div``;
const Grapic = styled.div`
	width: 8.75rem;
	height: 57.438rem;
	margin: 2.125rem 0 4.188rem 1.063rem;
	-webkit-filter: blur(100px);
	filter: blur(6.25rem);
	background-color: rgba(91, 21, 182, 0.5);
`;
