import Board from '../board/board';
import lessthan from '../../assets/less-than.png';
import morethan from '../../assets/more-than.png';
import share from '../../assets/share.svg';
import DropDowns from '../dropDowns/dropDowns';
import LeftSidebar from '../leftSidebar/leftSidebar';

import {Lessthan, Morethan, Topic, MiddleWrapper, ShareButton, Left, FilterSection, SearchBar, Full} from './middle.styles';


const middle = () => {

    return (
        <Full>
        <LeftSidebar />
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
                <DropDowns />                              
            </FilterSection>
            <Board />
        </MiddleWrapper>
        </Full>
    );
};

export default middle;