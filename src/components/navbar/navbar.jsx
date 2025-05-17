import { useState } from "react";
import { NavbarContainer, NavbarList, Logo, Hamburger, NavbarItem, Mobile, Left,Right } from "./navbar.styles";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";

const navbar = () => { 
    const [isOpen, setIsOpen] = useState(false);
return (
    <NavbarContainer>
        <Left>
        <Logo> <img src={logo} alt="logo"/>tiimi</Logo>
        <p> Recruitment </p>
        </Left>

        {/* <h2>Recruitment</h2> */}

        <NavbarList>
            <NavbarItem> Jobs </NavbarItem>
            <NavbarItem> Candidates </NavbarItem>
            <NavbarItem> Career Site </NavbarItem>
        </NavbarList>

        <Right>
            <img src={search} alt="search" />
        </Right>

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