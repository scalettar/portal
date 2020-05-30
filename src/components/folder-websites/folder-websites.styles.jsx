import styled, { css } from "styled-components";

import iconKindo from "../../assets/iconKindo.jpg";

//=====================================
// ICON LOGIC
//=====================================
const getItemIconImage = props => {
	if (props.iconType === "Kindo") {
		return iconKindoStyle;
	} else return iconNoneStyle;
};

const iconKindoStyle = css`
	background-image: url(${iconKindo});
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
    color: black;
	&:visited {
		color: black;
	}
`;
