import styled from "styled-components"; 

export const DataRange = styled.button`
    background-color: #DCDCDC;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 150px;
    height: 30px;
`;

export const ScoreRange = styled.button`
    background-color: #DCDCDC;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 150px;
    height: 30px;

`;

export const FilterButton = styled.button`
    background-color: #DCDCDC;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 150px;
    height: 30px;
`;

export const DataRangeDropDown = styled.div`
    position: relative;

`;

export const DataRangeList = styled.ul`
    position: absolute;
  top: 100%;
  left: 0;
  background: #DCDCDC;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   z-index: 10;
`;

export const DataRangeListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
    font-size: 14px;
`;

export const ScoreRangeList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #DCDCDC;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  `;
  
export const ScoreRangeListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
    font-size: 14px;
`;

export const ScoreRangeDropDown = styled.div`
    position: relative;

`;
export const FilterDropDown = styled.div`
    position: relative;
`;
export const FilterList = styled.ul`
    position: absolute;
  top: 100%;
  left: 0;
  background: #DCDCDC;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 5px 0;
  margin: 0;
  width: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FilterListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
    font-size: 14px;
`;