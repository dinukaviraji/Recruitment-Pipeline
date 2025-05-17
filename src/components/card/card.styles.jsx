import styled from "styled-components";

export const CardWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: grab;

`;

export const Assesment = styled.button`
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    cursor: pointer;
    gap: 3px;
    padding: 2px 7px;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;