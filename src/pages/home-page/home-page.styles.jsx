import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
`;

export const MainTitleContainer = styled.div`
	font-size: 30px;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
`;

export const SectionTitleContainer = styled.div`
	font-size: 20px;
	align-self: flex-start;
	margin-left: 15px;
`;

export const ItemsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 100vw;
	max-width: 750px;
	height: 150px;
`;

export const ItemContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;

	outline: none;
	text-decoration: none;
	color: black;
	&:visited {
		color: black;
	}
	&:hover {
		color: #ff3c00;
	}
`;

export const ItemTitleContainer = styled.div`
	font-size: 15px;
`;

export const ItemDisplayContainer = styled.img`
	margin: 5px;
	width: 100px;
	height: 100px;
	border-radius: 5px;
`;
