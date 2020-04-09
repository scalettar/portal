import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const getVisibleStyles = props => {
	if (props.isVisible) {
		return visibleStyle;
	} else return invisibleStyle;
};

const visibleStyle = css`
	transform: translate3d(0vw, 0, 0);
	overflow: hidden;
`;

const invisibleStyle = css`
	transform: translate3d(-100vw, 0, 0);
`;

export const MenuContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: whitesmoke;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
	overflow: scroll;
	z-index: 1000;

	${getVisibleStyles}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 25px;
`;

export const LinkContainer = styled(Link)`
	outline: none;
	text-decoration: none;
	font-size: 25px;
	padding: 15px;
	width: 200px;
	color: black;
	&:visited {
		color: black;
	}
	&:focus {
		color: limegreen;
	}
	&:hover {
		color: limegreen;
	}
`;
