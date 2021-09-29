import * as React from "react";
import styled, {css} from "styled-components";
import {FaShoppingCart} from 'react-icons/fa';

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
`

const NavbarItem = styled.div`
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const Navbar = () => {
  return (
    <Menu>
      <NavbarContent>
        <NavbarItem>
          <Link href="/">
            Random eshop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/shop_basket/">
            <FaShoppingCart/>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Menu>
  )
};

export default Navbar