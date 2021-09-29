import React from "react";
import styled from "styled-components";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

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
`

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.div`
   margin: 5px;
`


const Item = (props: any) => {
  return <I>
    <ItemCost>
      <Text>{props.name}</Text>
      <Text>{props.price}</Text>
    </ItemCost>
    <Counter>
      <AiOutlineMinus/>
      <Text>0</Text>
      <AiOutlinePlus/>
    </Counter>
  </I>
};

export default Item;