import styled from "styled-components";

export const StyledInput = styled.input`
    height: 50px;
    background-color: #eeeeee;
    outline: none;
    border: 0;
    border-radius: 3px;
    padding-left: 18px;
    font-size: 18px;
    width: 100%;
`;

export const InputLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #12345C;
    margin-bottom: 8px;
`;

export const InputWrapper = styled.div<{m?: string}>`
    width: 100%;
    margin: ${({m}) => m};
`;
