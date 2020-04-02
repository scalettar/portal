import styled, { css } from "styled-components";
import background from "../../assets/backgroundTechnical.jpg";

import iconFolder from "../../assets/iconFolder.png";
import iconGithub from "../../assets/iconGithub.png";
import iconLinkedIn from "../../assets/iconLinkedIn.png";
import iconLanguage from "../../assets/iconDuolingo.png";
import iconHealth from "../../assets/iconActivity.png";
import iconMusic from "../../assets/iconPiano.png";
import iconKindo from "../../assets/iconKindo.jpg";

//=====================================
// ICON LOGIC
//=====================================
const getItemIconImage = props => {
	if (props.iconType === "Github") {
		return iconGithubStyle;
	} else if (props.iconType === "LinkedIn") {
		return iconLinkedInStyle;
	} else if (props.iconType === "Language") {
		return iconLanguageStyle;
	} else if (props.iconType === "Health") {
		return iconHealthStyle;
	} else if (props.iconType === "Music") {
		return iconMusicStyle;
	} else if (props.iconType === "Kindo") {
		return iconKindoStyle;
	} else return iconFolderStyle;
};

const iconFolderStyle = css`
	background-image: url(${iconFolder});
`;

const iconGithubStyle = css`
	background-image: url(${iconGithub});
`;

const iconLinkedInStyle = css`
	background-image: url(${iconLinkedIn});
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

const iconKindoStyle = css`
	background-image: url(${iconKindo});
`;

//=====================================
// MAIN STYLING
//=====================================

export const BackgroundContainer = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
    /* background-image: url(${background});
    background-position: 50% 50%; */
    /* background-size: 100%;
    background-repeat: repeat; */
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

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
    align-items: center;
    &:hover{
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

	${getItemIconImage}
    background-size: cover;
`;
