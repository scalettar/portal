import styled, { css } from "styled-components";

import iconGithub from "../../assets/iconGithub.png";
import iconLinkedIn from "../../assets/iconLinkedIn.png";

//=====================================
// ICON LOGIC
//=====================================
const getItemIconImage = props => {
	if (props.iconType === "Github") {
		return iconGithubStyle;
	} else if (props.iconType === "LinkedIn") {
		return iconLinkedInStyle;
	} else return iconNoneStyle;
};

const iconGithubStyle = css`
	background-image: url(${iconGithub});
`;

const iconLinkedInStyle = css`
	background-image: url(${iconLinkedIn});
`;

const iconNoneStyle = css``;

//=====================================
// MAIN STYLING
//=====================================

export const BackgroundContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 25px;
	background: #ffffff;
	width: 100vw;
	max-width: 750px;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
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
    &:hover{
        cursor: pointer;
    }

	${getItemIconImage}
	background-size: cover;
`;

export const ItemLinkContainer = styled.a`
	outline: none;
    text-decoration: none;
	&:visited {
		color: black;
	}
`;
