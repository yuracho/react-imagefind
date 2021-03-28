import React, { useEffect, useState } from "react";
import ImageList from "./ImageList";
import ImageSearch from "./ImageSearch";
import axios from "axios";
import styled from "styled-components";
import "../utils/css/reset.css";

const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`;

const Images = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    getData();
  }, [text]);

  const getData = () => {
    const API_KEY = "20894229-e1216649b05b75f695a2216c6";
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo
`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.hits);
        setLoading(false);
        setError("");
      })
      .catch((error) => {
        setData([]);
        setLoading(true);
        setError("데이터를 찾을 수 없습니다.");
      });
  };

  const searchText = (img) => {
    setText(img);
  };

  return (
    <Container>
      <ImageSearch searchText={searchText} />
      {loading && data.length === 0 && <h1>NO Images found</h1>}
      {data && loading ? "로딩중" : <ImageList data={data} />}
      <p>{error ? error : null}</p>
    </Container>
  );
};

export default Images;
