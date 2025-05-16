import { NavbarContainer, NavbarList, Logo, Hamburger, NavbarItem, Mobile } from "./navbar.styles";
import logo from "../../assets/logo.png";
import { useState } from "react";

const navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);
return (
    <NavbarContainer>
        <Logo> <img src={logo} alt="logo"/>tiimi</Logo>

        {/* <h2>Recruitment</h2> */}

        <NavbarList>
            <NavbarItem> Jobs </NavbarItem>
            <NavbarItem> Candidates </NavbarItem>
            <NavbarItem> Career Site </NavbarItem>
        </NavbarList>

        <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <span/>
            <span/>
            <span/>
        </Hamburger>

        {isOpen && (
            <Mobile>
                <NavbarItem> Jobs </NavbarItem>
                <NavbarItem> Candidates </NavbarItem>
                <NavbarItem> Career Site </NavbarItem>
            </Mobile>
        )}
    </NavbarContainer>
);

};

export default navbar;