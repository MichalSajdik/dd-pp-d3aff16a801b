import * as React from "react";
import styled from "styled-components";
import Item from "./Item";
import Search from "./Search";

const ItemsContainer = styled.div`
  padding: 0 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ItemsProvidedContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  @media (min-width: 768px) {
    margin: auto;
    width: 1000px;
  }
`;

const ItemsProvided = () => {

  let items = [
    {name: "Item 1", cost: "10 Czk"},
    {name: "Item 2", cost: "10 Czk"},
    {name: "Item 3", cost: "10 Czk"},
    {name: "Item 2 test", cost: "10 Czk"},
    {name: "Item 1", cost: "10 Czk"},
    {name: "Item 1", cost: "10 Czk"},
    {name: "Item 1", cost: "10 Czk"}
  ];

  return (
    <Container>
      <Search/>
      <ItemsProvidedContent>
        <ItemsContainer>
          {items.length > 0 && items.map((item) => {
            return (
              <Item name={item.name} cost={item.cost}/>
            )
          })}
        </ItemsContainer>
      </ItemsProvidedContent>
    </Container>
  )
};

export default ItemsProvided