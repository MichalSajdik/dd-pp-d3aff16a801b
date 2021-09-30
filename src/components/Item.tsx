import React from "react";
import styled from "styled-components";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {AppState} from "../store/rootStore";
import {Dispatch} from "redux";
import {decrementCount, incrementCount} from "../store/items/ItemsAction";
import {connect} from "react-redux";

const I = styled.div`
  width: 170px;
  padding: 20px;
  margin: 20px;
  position: relative;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: rgba(0,0,0,0.2) 0 0 5px;
`;

const ItemCost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
   margin: 5px;
   user-select: none;
`;

const Item = (props: ItemProps) => {
  return <I>
    <ItemCost>
      <Text>{props.name}</Text>
      <Text>{props.price}</Text>
    </ItemCost>
    <Counter>
      <AiOutlineMinus style={{background: "rgb(45,156,219)", cursor: "pointer", color: "white", borderRadius: "2px"}} onClick={props.decrement}/>
      <Text>{props.count}</Text>
      <AiOutlinePlus style={{background: "rgb(45,156,219)", cursor: "pointer", color: "white", borderRadius: "2px"}} onClick={props.increment}/>
    </Counter>
  </I>
};

interface ItemProps {
  increment: () => void;
  decrement: () => void;
  index: number;
  name: string;
  price: string;
  count: number;
  id: string;
}

interface PassedProps {
  index: number;
  name: string;
  price: string;
  id: string;
}

interface ItemsProvidedDispatchProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateToProps = (state: AppState, ownProps: PassedProps) => {
  return ({
    count: state.itemsReducer.items[ownProps.index].count
  })
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: PassedProps): ItemsProvidedDispatchProps => {
  return ({
    increment: () => dispatch(incrementCount(ownProps.id)),
    decrement: () => dispatch(decrementCount(ownProps.id)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

