import React from "react";
import styled from "styled-components";
import {FaSearch} from 'react-icons/fa';

const S = styled.div`
    text-align: right;
    margin-right: 20px;
    margin-top: 15px;
`

const Input = styled.input`
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 0px solid #ccc;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-sizing: border-box;
  height: 40px;
  padding-right: 30px;
`

const SearchDiv = styled.div`
  display: inline;
  margin-left: -25px;
  vertical-align: middle;
`

const Search = () => {
  return <S>
    <Input onInput={e => {
    }}></Input>
    <SearchDiv>
      <FaSearch/>
    </SearchDiv>
  </S>
};

export default Search;