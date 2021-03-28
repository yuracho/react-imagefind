import React, { useState } from "react";
import styled from "styled-components";

const ImageForm = styled.form`
  text-align: center;
  div {
    width: 400px;
    border-bottom: 1px solid tomato;
    margin: 30px auto;
    padding: 15px 0;
    input {
      width: 73%;
      box-sizing: border-box;
      padding: 15px;
      vertical-align: top;
      border: none;
      outline: none;
    }
    button {
      widtth: 25%;
      height: 35x;
      border: none;
    }
  }
`;

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <ImageForm onSubmit={onSubmit}>
      <div>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button type="submit">검색</button>
      </div>
    </ImageForm>
  );
};

export default ImageSearch;
