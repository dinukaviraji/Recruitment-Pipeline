import styled from 'styled-components';


export const ColumnWrapper = styled.div`
    background-color: #DCDCDC;
    border-radius: 8px;
    padding: 10px;
    flex: 0 0 250px;

`;

const bg = {
    Applying : '#FF8C00',
    Screening: '#DB7093',
    Interview: '#6495ED',
    Test: '#00CED1',
}

export const Title = styled.label`   

    background-color: ${({ title }) => bg[title] || '#C0C0C0'};
    padding: 3px 10px;
    border-radius: 15px;
    color: #fff;
`;

export const CandidateList = styled.div`
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
    width: 8px;
  }
    &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 4px;
  }
`;