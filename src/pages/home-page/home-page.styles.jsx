import styled, { css } from "styled-components";
import background from "../../assets/backgroundTechnical.jpg";

import iconFolderClosed from "../../assets/iconFolderClosed.png";
import iconFolderOpened from "../../assets/iconFolderOpened.png";

//=====================================
// ICON LOGIC
//=====================================
const getItemIconImage = props => {
	if (props.iconType === "FolderOpened") {
		return iconFolderOpenedStyle;
	} else {
		return iconFolderClosedStyle;
	}
};

const iconFolderOpenedStyle = css`
	background-image: url(${iconFolderOpened});
`;

const iconFolderClosedStyle = css`
	background-image: url(${iconFolderClosed});
`;

//=====================================
// MAIN STYLING
//=====================================

export const BackgroundContainer = styled.div`
    height: auto;
    min-height: calc(100vh - 75px);
    width: 100%;
    background: whitesmoke;

    background-image: url(${background});
    background-position: 50% 50%;
    background-size: 200%;
    background-repeat: repeat;

	display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainContainer = styled.div`
    width: 100vw;
    max-width: 750px;
    min-height: calc(100vh - 75px);

	display: flex;
	flex-direction: column;
	align-items: center;
    background: #ffffff;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    padding-top: 50px;
`;

export const ItemsContainer = styled.div`
    height: 150px;
	width: 100vw;
	max-width: 750px;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover {
		opacity: 0.7;
	}
`;

export const ItemTitleContainer = styled.div`
	font-size: 15px;
`;

export const ItemIconContainer = styled.button`
	margin: 5px;
	width: 100px;
	height: 100px;
    border-radius: 5px;
	background: none;
	border: none;
	outline: none;
	&:hover {
		cursor: pointer;
	}

	${getItemIconImage}
	background-size: cover;
`;
