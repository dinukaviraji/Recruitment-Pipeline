import {Wrapper} from "./rightSidebar.styles";
import icon1 from "../../assets/icon2.png";
import icon2 from "../../assets/iconr2.png";
import icon3 from "../../assets/iconr3.png";
import icon4 from "../../assets/iconr4.svg";
import icon5 from "../../assets/iconr5.svg";
import icon6 from "../../assets/iconr6.png";

const rightSidebar = () => {
    return(
        <Wrapper>
            <img src={icon1} alt="icon1" width={22} />
            <img src={icon2} alt="icon2" width={22} />
            <img src={icon3} alt="icon3" width={22} />
            <hr style={{width: 30}}/>
            <img src={icon4} alt="icon4" width={22} />
            <img src={icon5} alt="icon5" width={22} />
            <img src={icon6} alt="icon6" width={22} />

        </Wrapper>
    );
};
export default rightSidebar;