import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import ImageItem from "./ImageItem";

const ImageContainer = styled.div`
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
`;

const ImageList = ({ data }) => {
  return (
    <ImageContainer>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <ImageItem item={item} />
        ))}
      </Masonry>
    </ImageContainer>
  );
};

export default ImageList;
