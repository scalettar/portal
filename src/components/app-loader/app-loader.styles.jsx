import styled , { css } from "styled-components";

const getVisibleStyles = props => {
	if (props.openedApp !== "None") {
		return visibleStyle;
	} else return invisibleStyle;
};

const visibleStyle = css`
	transform: translate3d(0vw, 0, 0);
	overflow: hidden;
`;

const invisibleStyle = css`
	transform: translate3d(0, 100vh, 0);
`;

export const BackgroundContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
	overflow: scroll;
    z-index: 1000;
    backdrop-filter: opacity(0.5);
    overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;

    ${getVisibleStyles}
`;

export const MainContainer = styled.div`
	width: 100%;
    height: 100%;
    max-width: 750px;
    background: white;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
