import styled, { css } from "styled-components";

import iconAbout from "../../assets/iconAboutPersonal.png";
import iconLanguage from "../../assets/iconDuolingo.png";
import iconHealth from "../../assets/iconActivity.png";
import iconMusic from "../../assets/iconPiano.png";

//=====================================
// ICON LOGIC
//=====================================
const getItemIconImage = props => {
	if (props.iconType === "AboutPersonal") {
		return iconAboutStyle;
	} else if (props.iconType === "Language") {
		return iconLanguageStyle;
	} else if (props.iconType === "Health") {
		return iconHealthStyle;
	} else if (props.iconType === "Music") {
		return iconMusicStyle;
	} else return iconNoneStyle;
};

const iconAboutStyle = css`
	background-image: url(${iconAbout});
`;

const iconLanguageStyle = css`
	background-image: url(${iconLanguage});
`;

const iconHealthStyle = css`
	background-image: url(${iconHealth});
`;

const iconMusicStyle = css`
	background-image: url(${iconMusic});
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
	width: 100vw;
	max-width: 750px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
`;

export const ItemsContainer = styled.div`
	width: 100vw;
	max-width: 750px;
	height: 150px;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
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

export const ItemLinkContainer = styled.a`
	outline: none;
	text-decoration: none;
	&:visited {
		color: black;
	}
`;
