import * as React from "react";
import styled from "styled-components";


const Container = styled.div`
  @media (min-width: 768px) {
    margin: auto;
    width: 960px;
  }
  background: #FFFFFF;
  border-radius: 4px;
`;

const ShoppingCartDiv = styled.div`
  margin: 10px;
  padding: 10px;
`;

const CartCenter = styled.div`
  text-align: center;
  padding: 10px;
  font-weight: 500;
  font-size: 20px;
`;

const ItemCell = styled.div`
  margin: 3px;
  margin-left: 10px;
`;

const MenuCell = styled.div`
  margin: 10px;
  font-size: 18px;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FinalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  margin-right: 12px;
`;

const Table = styled.div`
  border-bottom: solid 1px #ddd;
  border-top: solid 1px #ddd;
  padding: 10px;
`;


const ShoppingCart = () => {
  return (
    <Container>
      <ShoppingCartDiv>
        <CartCenter>CART</CartCenter>
        <Table>
          <ItemRow>
            <MenuCell>Name</MenuCell>
            <MenuCell>Amount</MenuCell>
            <MenuCell>Price</MenuCell>
          </ItemRow>
          <ItemRow>
            <ItemCell>Item 1</ItemCell>
            <ItemCell>2</ItemCell>
            <ItemCell>20 Czk</ItemCell>
          </ItemRow>
          <ItemRow>
            <ItemCell>Item 2</ItemCell>
            <ItemCell>3</ItemCell>
            <ItemCell>30 Czk</ItemCell>
          </ItemRow>
        </Table>
        <FinalPrice>50 Czk</FinalPrice>
        <CartCenter>
          <button onClick={()=>window.history.back()}>
            BACK
          </button>
        </CartCenter>
      </ShoppingCartDiv>
    </Container>
  )
};

export default ShoppingCart