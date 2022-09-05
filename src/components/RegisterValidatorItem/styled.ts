import styled from 'styled-components';

export const ValidatorItemWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 13px;
`;

export const ValidatorItemCircle = styled.div<{isChecked: boolean}>`
    width: 17px;
    height: 17px;
    border: 2px solid ${({isChecked}) => isChecked ? "#1EA7E1" : "#808080"};
    background-color: ${({isChecked}) => isChecked ? "#1EA7E1" : "none"};
    margin-right: 9px;
    border-radius: 50%;
`;

export const ValidatorItemText = styled.p<{isChecked: boolean}>`
    color: ${({isChecked}) => isChecked ? "#1EA7E1" : "#808080"};
    font-weight: 500;
`;
