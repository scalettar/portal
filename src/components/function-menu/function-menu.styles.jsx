import styled, {css} from "styled-components";

const getVisibleStyles = props => {
    if(props.isVisible) {
        return visibleStyle;
    }
    else return invisibleStyle;
}

const visibleStyle = css`
    transform: translate3d(0vw, 0, 0);
    overflow: hidden;
`;

const invisibleStyle = css`
    transform: translate3d(-100vw, 0, 0);
`;

export const MenuContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFE600;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform .3s cubic-bezier(0, .52, 0, 1);
    overflow: scroll;
    z-index: 1000;

    ${getVisibleStyles}
`;