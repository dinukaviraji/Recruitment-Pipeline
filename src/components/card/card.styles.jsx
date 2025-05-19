import styled from "styled-components";

export const CardWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: grab;
    font-size: 14px;
`;

export const Assesment = styled.button`
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: white;
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
export const ImageFrame = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ccc;
`;
export const DefaultCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
 justify-content: center;
`;