import * as React from "react";
import styled from "styled-components";
import {ItemInterface} from "../store/items/models/Items";
import {AppState} from "../store/rootStore";
import {connect} from "react-redux";


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


function removeItemsWith0Count(item: ItemInterface) {
  return item.count > 0
}

const ShoppingCart = (props: ShoppingCartProps) => {
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
          {props.items.filter(removeItemsWith0Count).map((item)=>{
            return (
            <ItemRow>
              <ItemCell>{item.name}</ItemCell>
              <ItemCell>{item.count}</ItemCell>
              <ItemCell>{item.price + " Czk"}</ItemCell>
            </ItemRow>
            )
          })}
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

interface ShoppingCartProps {
  items: ItemInterface[]
}

const mapStateToProps = (state: AppState) => ({
  items: state.itemsReducer.items
});

export default connect(mapStateToProps, null)(ShoppingCart)