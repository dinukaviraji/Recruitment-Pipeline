import Board from '../board/board';
import lessthan from '../../assets/less-than.png';
import morethan from '../../assets/more-than.png';
import share from '../../assets/share.svg';
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
                <DataRange>   Date Range </DataRange>
                <ScoreRange> Score Range </ScoreRange>
                <FilterButton> Advance Filter </FilterButton>
            </FilterSection>



            <Board />
        </MiddleWrapper>
    );
};

export default middle;