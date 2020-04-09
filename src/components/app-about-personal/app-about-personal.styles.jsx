import styled , { css } from "styled-components";

const getVisibleStyles = props => {
	if (props.openedApp === "Language") {
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

export const BackgroundContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: yellow;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
	overflow: scroll;
	z-index: 1000;

	display: flex;
	flex-direction: column;
	align-items: center;

    ${getVisibleStyles}
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 25px;
	background: red;
	width: 100vw;
    height: 100vh;
	max-width: 750px;
`;
