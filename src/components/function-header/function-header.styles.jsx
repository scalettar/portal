import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div``;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    height: 75px;
    width: 100%;
    background-color: black;
`;

export const ButtonContainer = styled.button`
    background-color: black;
    color: white;
	font-size: 30px;
	width: 50px;
    height: 50px;
    margin-left: 15px;
	border: none;
	outline: none;

	&:hover {
		color: lime;
		cursor: pointer;
	}
`;

export const TitleContainer = styled(Link)`
    font-size: 30px;
    margin-right: 25px;
    color: white;
    outline: none;
    text-decoration: none;
    font-size: 25px;
    &:visited {
        color: white;
    }
    &:hover {
        color: lime;
    }
`;
