import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #454545;
    color: white;
    font-family: 'Poppins', sans-serif;
    position: sticky;
    top: 0;
    padding: 0 10px;
  `;

export const Logo = styled.p`
    display: flex;
    align-items: center;
    justify-content: left;
`;
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
 `;

export const NavbarList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 10px;

    @media (max-width: 768px) {
    display: none;
  }

`;

export const NavbarItem = styled.li`
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #333;
        border-radius: 5px;
    }
`;

export const Right = styled.div`
    display: flex;
    align-items: center; 
    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        // transition: all 0.3s ease-in-out;

        // &:hover {
        //     background-color: #333;
        //     border-radius: 5px;
        // }
    }`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    align-items: left;
    cursor: pointer;
    gap: 5px;

    span {
        width: 25px;
        height: 2px;
        background-color: white;
        transition: all 0.3s ease-in-out;
    }
        @media (max-width: 768px) {
        display: flex;
        }
`;

export const Mobile = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: center;
    gap: 10px;
    background-color: #454545;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    padding: 10px 0;

    @media (min-width: 768px) {
        display: none;
  }
`;