import React from "react";
import styled from "styled-components";

const ImageBox = styled.article`
  margin-bottom: 30px;
  border: 1px solid #dcdcdc;
  box-shadow: 2px 2px 3px #888;
  padding: 10px;

  img {
    width: 100%;
  }
  h3 {
    font-size: 20px;
    color: tomato;
    margin: 15px 0;
  }
  ul {
    margin-bottom: 15px;
    li {
      margin-bottom: 5px;
    }
  }
  p {
    margin-bottom: 20px;
    span {
      display: inline-block;
      padding: 5px 15px;
      border-radius: 15px;
      background: beige;
      margin-right: 15px;
    }
  }
`;

const ImageItem = ({ item }) => {
  const { views, downloads, likes, tags, user, webformatURL } = item;
  const tagList = tags.split(",");
  return (
    <ImageBox>
      <img src={webformatURL} alt="" />
      <h3>{user}</h3>
      <ul>
        <li>Views: {views} </li>
        <li>Downloads: {downloads} </li>
        <li>Likes: {likes} </li>
      </ul>
      <p>
        {tagList.map((tag) => (
          <span> #{tag} </span>
        ))}
      </p>
    </ImageBox>
  );
};

export default ImageItem;
