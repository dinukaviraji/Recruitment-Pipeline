import { useState, useRef, useEffect } from 'react';
import data from '../../assets/data.png';
import score from '../../assets/score.png';
import filter from '../../assets/filter.png';
import dropdown from '../../assets/drop-down.png';
import {DataRange, ScoreRange, FilterButton, DataRangeList, DataRangeDropDown, DataRangeListItem, 
    ScoreRangeList, ScoreRangeListItem, ScoreRangeDropDown, FilterDropDown, FilterList, FilterListItem} from './dropDowns.styles';

const DropDowns = () => { 
    // Managing the state of the first dropdown
    const [isOpen1, setIsOpen1] = useState(false);
    const Ref1 = useRef(); 
    const [selectedItem1, setSelectedItem1] = useState("Data Range");
    
    const handleItemClick1 = (item) => {
        setSelectedItem1(item);
        setIsOpen1(false);
    }
    const firstDropdown = () => {
        setIsOpen1(!isOpen1);};


    // Managing the state of the second dropdown
    const [isOpen2, setIsOpen2] = useState(false);
    const Ref2 = useRef();
    const [selectedItem2, setSelectedItem2] = useState("Score Range");

    const handleItemClick2 = (item) => { 
        setSelectedItem2(item);
        setIsOpen2(false);
    }      
    const secondDropdown = () => {
            setIsOpen2(!isOpen2);};

    // Managing the state of the third dropdown
    const [isOpen3, setIsOpen3] = useState(false);
    const Ref3 = useRef();
    const [selectedItem3, setSelectedItem3] = useState("Advance Filter");

    const handleItemClick3 = (item) => { 
        setSelectedItem3(item);
        setIsOpen3(false);
    }      
    const thirdDropdown = () => {
            setIsOpen3(!isOpen3);};
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (Ref1.current && !Ref1.current.contains(event.target)) setIsOpen1(false);
            if (Ref2.current && !Ref2.current.contains(event.target)) setIsOpen2(false);
            if (Ref3.current && !Ref3.current.contains(event.target)) setIsOpen3(false);
            }
    
            document.addEventListener("mousedown", handleClickOutside);
        }, []);

    return (
        <>
        <DataRangeDropDown ref={Ref1}>
            <DataRange> <img src={data} width={20} />
                {selectedItem1}  <img src={dropdown} width={20} onClick={firstDropdown}/> </DataRange>
                {isOpen1 && (
                <DataRangeList>
                    <DataRangeListItem onClick={() => handleItemClick1("Range 1")}>  Range 1 </DataRangeListItem>
                    <DataRangeListItem onClick={() => handleItemClick1("Range 2")}>  Range 2  </DataRangeListItem>
                    <DataRangeListItem onClick={() => handleItemClick1("Range 3")}>  Range 3  </DataRangeListItem>
                    <DataRangeListItem onClick={() => handleItemClick1("Range 4")}>  Range 4  </DataRangeListItem>
                </DataRangeList>
            )}
        </DataRangeDropDown>

        <ScoreRangeDropDown ref={Ref2}>
            <ScoreRange> <img src={score} width={20} /> {selectedItem2}<img src={dropdown} width={20} onClick={secondDropdown}/> </ScoreRange>
                {isOpen2 && (
                <ScoreRangeList>
                    <ScoreRangeListItem onClick={()=> handleItemClick2("Over 4")}> Over 4 </ScoreRangeListItem>
                    <ScoreRangeListItem onClick={()=> handleItemClick2("Over 3")}> Over 3  </ScoreRangeListItem>
                    <ScoreRangeListItem onClick={()=> handleItemClick2("Over 2")}> Over 2  </ScoreRangeListItem>
                    <ScoreRangeListItem onClick={()=> handleItemClick2("Over 1")}> Over 1 </ScoreRangeListItem>
                </ScoreRangeList>
                )}
        </ScoreRangeDropDown>

        <FilterDropDown ref={Ref3}>
            <FilterButton> <img src={filter} width={20}/>{selectedItem3} <img src={dropdown} width={20} onClick={thirdDropdown}/> </FilterButton>
                {isOpen3 && (
                <FilterList>
                    <FilterListItem onClick={()=> handleItemClick3("Applied Date")}>Applied Date</FilterListItem>
                    <FilterListItem onClick={()=> handleItemClick3("Referred Candidates")}>Referred Candidates</FilterListItem>
                </FilterList>
                )}

        </FilterDropDown>
        </>
    );
};
export default DropDowns;