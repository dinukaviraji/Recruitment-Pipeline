import { LeftSidebarWrapper } from "./leftSidebar.styles";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.svg";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import icon10 from "../../assets/icon10.svg";
import icon11 from "../../assets/icon11.png";
import icon12 from "../../assets/icon12.png";

const leftSidebar = () => {
    return (
        <LeftSidebarWrapper>
            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <img src={icon1} alt="icon1" width={22} />
            <img src={icon2} alt="icon2" width={22} />
            <img src={icon3} alt="icon3" width={22} />      
            <img src={icon4} alt="icon4" width={22} />
            <hr style={{width: 30}}/>
            <img src={icon5} alt="icon5" width={22} />
            <img src={icon6} alt="icon6" width={22} />
            <hr style={{width: 30}}/>
            <img src={icon7} alt="icon7" width={22} />
            <img src={icon8} alt="icon8" width={22} />
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <hr style={{width: 30}}/>
            <img src={icon10} alt="icon10" width={22} />
            <img src={icon11} alt="icon11" width={22} />
            <img src={icon12} alt="icon12" width={28} />
            </div>
            
        </LeftSidebarWrapper>
    );
};
export default leftSidebar;