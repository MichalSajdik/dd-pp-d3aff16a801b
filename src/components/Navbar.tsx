import * as React from "react";
import styled, {css} from "styled-components";
import {FaShoppingCart} from 'react-icons/fa';

const NavbarContent = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin: auto;
    width: 1000px;
  }
  
  // cursor: pointer;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  border-bottom: 1px solid #EBEBEB;
  border-left: 1px solid #EBEBEB;
  border-right: 1px solid #EBEBEB;
`;

const NavbarItem = styled.div`
  margin: 10px;
`;


const Navbar = () => {
  return (
    <NavbarContent>
      <NavbarItem>Random eshop</NavbarItem>
      <NavbarItem><FaShoppingCart/></NavbarItem>
    </NavbarContent>
  )
};

export default Navbar