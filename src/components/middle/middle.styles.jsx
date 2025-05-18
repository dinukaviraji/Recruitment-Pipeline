import styled from "styled-components";

export const Lessthan = styled.button`
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
    padding: 3px 5px;
`;

export const Morethan = styled.button`
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #ccc;
    cursor: pointer;
    padding: 3px 5px;
`;

export const Topic = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MiddleWrapper = styled.div`
    background-color: #F5F5F5;
    padding: 16px;
`;

export const ShareButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 5px;
    padding: 8px;
    background-color: #2E8B57;
    color: #fff;
    border: none;
    font-size: 12px;
    cursor: pointer;
`;
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const FilterSection = styled.div`
    display: flex;
    gap: 10px;
    
`;

export const SearchBar = styled.textarea`

    height: 20px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    font-size: 14px;
`;


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
