import styled from "styled-components";

export const StyledButton = styled.button<{m?: string}>`
    background-color: #FFB800;
    height: 50px;
    border: 0;
    width: 100%;
    border-radius: 3px;
    font-weight: 500;
    font-size: 16px;
    color: #28336D;
    margin: ${({m}) => m};
    cursor: pointer;
`;