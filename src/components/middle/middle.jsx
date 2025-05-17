import Board from '../board/board';
import lessthan from '../../assets/less-than.png';
import morethan from '../../assets/more-than.png';
import share from '../../assets/share.svg';
import data from '../../assets/data.png';
import score from '../../assets/score.png';
import filter from '../../assets/filter.png';
import dropdown from '../../assets/drop-down.png';

import {Lessthan, Morethan, Topic, MiddleWrapper, ShareButton, FilterSection, SearchBar,DataRange, ScoreRange, FilterButton} from './middle.styles';


const middle = () => {
    return (
        <MiddleWrapper>
            <Topic>     
                <h2> Research and Development Officer </h2>
                <Lessthan> <img src={lessthan} alt='lessthan' width={20}/></Lessthan>
                <Morethan> <img src={morethan} alt='morethan' width={18}/></Morethan>   
                <ShareButton> <img src={share} alt='share' width={15}/> Share & Promote </ShareButton>          
            </Topic>

            <hr/>
            <FilterSection>
                <SearchBar placeholder='Search'> </SearchBar>
                <DataRange> <img src={data} width={20}/>  Date Range <img src={dropdown} width={20}/> </DataRange>
                <ScoreRange> <img src={score} width={20}/> Score Range <img src={dropdown} width={20}/> </ScoreRange>
                <FilterButton> <img src={filter} width={20}/> Advance Filter <img src={dropdown} width={20}/> </FilterButton>
                
            </FilterSection>



            <Board />
        </MiddleWrapper>
    );
};

export default middle;