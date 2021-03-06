import * as React from "react";
import styled from "styled-components";
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from "react-router-dom";

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    margin: auto;
    width: 1000px;
  }
`;

const Menu = styled.div`
  background: #FFFFFF;
  border-bottom: 1px solid #EBEBEB;
`;

const NavbarItem = styled.div`
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Menu>
      <NavbarContent>
        <NavbarItem>
          <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
            Random eshop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/shop_basket/" style={{textDecoration: "none",color: "rgb(45,156,219)", cursor: "pointer", fontSize: "20px"}}>
            <FaShoppingCart/>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Menu>
  )
};

export default Navbar