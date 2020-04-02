import styled, { css } from "styled-components";
import background from "../../assets/backgroundTechnical.jpg";

import iconFolder from "../../assets/iconFolder.png";

//=====================================
// ICON LOGIC
//=====================================
const getItemIconImage = props => {
    return iconFolderStyle;
};

const iconFolderStyle = css`
	background-image: url(${iconFolder});
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
    &:hover{
        cursor: pointer;
    }

	${getItemIconImage}
    background-size: cover;
`;
