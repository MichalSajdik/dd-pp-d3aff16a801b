import * as React from "react";
import styled, {css} from "styled-components";

const ContentCenter = styled.div`
  display: flex;
  @media (min-width: 768px) {
    margin: auto;
    width: 1000px;
  }
`;

const Navbar = () => {
  return (
    <ContentCenter>
    <div>navbar</div>
    <div>navbar2</div>
    </ContentCenter>
  )
};

export default Navbar