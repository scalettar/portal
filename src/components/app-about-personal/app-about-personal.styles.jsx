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
	transform: translate3d(-100vh, 0, 0);
`;

export const BackgroundContainer = styled.div`
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
	max-width: 750px;
`;
