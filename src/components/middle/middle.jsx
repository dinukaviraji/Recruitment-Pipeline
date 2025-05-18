import { useState } from 'react';
import Board from '../board/board';
import lessthan from '../../assets/less-than.png';
import morethan from '../../assets/more-than.png';
import share from '../../assets/share.svg';
import data from '../../assets/data.png';
import score from '../../assets/score.png';
import filter from '../../assets/filter.png';
import dropdown from '../../assets/drop-down.png';

import {Lessthan, Morethan, Topic, MiddleWrapper, ShareButton, Left, FilterSection, 
    SearchBar,DataRange, ScoreRange, FilterButton, DataRangeList, DataRangeDropDown, DataRangeListItem} from './middle.styles';


const middle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);};
    return (
        <MiddleWrapper>
            <Topic>     
                <Left>
                <h2> Research and Development Officer </h2>
                <Lessthan> <img src={lessthan} alt='lessthan' width={20}/></Lessthan>
                <Morethan> <img src={morethan} alt='morethan' width={18}/></Morethan>  
                </Left> 
                <ShareButton> <img src={share} alt='share' width={15}/> Share & Promote </ShareButton>          
            </Topic>

            <hr/>
            <FilterSection>
                <SearchBar placeholder='Search'> </SearchBar>

                <DataRangeDropDown>
                <DataRange> <img src={data} width={20}/>  
                Date Range  <img src={dropdown} width={20} onClick={toggleDropdown}/> </DataRange>
                {isOpen && (
                <DataRangeList>
                    <DataRangeListItem>  Range 1 </DataRangeListItem>
                    <DataRangeListItem>  Range 2  </DataRangeListItem>
                    <DataRangeListItem>  Range 3  </DataRangeListItem>
                    <DataRangeListItem>  Range 4  </DataRangeListItem>
                </DataRangeList>
                )}
                </DataRangeDropDown>

                <ScoreRange> <img src={score} width={20}/> Score Range <img src={dropdown} width={20}/> </ScoreRange>
                <FilterButton> <img src={filter} width={20}/> Advance Filter <img src={dropdown} width={20}/> </FilterButton>
                
            </FilterSection>



            <Board />
        </MiddleWrapper>
    );
};

export default middle;