import Board from '../board/board';
import lessthan from '../../assets/less-than.png';
import morethan from '../../assets/more-than.png';
import share from '../../assets/share.svg';
import DropDowns from '../dropDowns/dropDowns';
import LeftSidebar from '../leftSidebar/leftSidebar';
import refer from '../../assets/add.png';
import settings from '../../assets/settings.svg';
import kanban from '../../assets/kanban.png';
import dropdown from '../../assets/drop-down.png';
import Rightsidebar from '../rightSidebar/rightSidebar';

import {Lessthan, Morethan, Topic, MiddleWrapper, ShareButton, 
    Left, FilterSection, SearchBar, Full, LayoutButton} from './middle.styles';


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
                <div style={{display: "flex", gap: '5px'}}>
                <SearchBar placeholder='Search'> </SearchBar>
                <DropDowns />   
                </div>
                <div style={{display: "flex", alignItems:'center', gap: "10px"}}>                   
                    <img src={refer} alt='refer' width={20}/>
                    <p style={{fontSize:'13px'}}> Refer People </p>
                    <label style={{backgroundColor: 'white', padding:'3px', borderRadius:'6px'}}> <img src={settings} alt='settings' width={18} /> </label>
                    <LayoutButton> <img src={kanban} width={18} /> Kanban <img src={dropdown} width={20}/> </LayoutButton>
                </div>                           
            </FilterSection>
            <Board/>
        </MiddleWrapper>
        <Rightsidebar />
        </Full>
    );
};

export default middle;