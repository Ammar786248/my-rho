import React, { useState } from "react";
import Title from "../../Component/Title";
import Img1 from "../../Component/Img";
import styled from "styled-components";
import Profile from "../Profile";
import Mcqs from "../Mcqs";
import Plan from "../Planning";
import Question from "../Question";
import True from "../Truefalse";

const Main = () => {
  const [favPage, setFavPage] = useState("profile");
  return (
    <>
      <Container>
        <div style={{ maxHeight: "80vh" }}>
          <Title />
          {favPage === "profile" ? (
            <Profile setFavPage={setFavPage} />
          ) : favPage === "mcqs" ? (
            <Mcqs setFavPage={setFavPage} />
          ) : favPage === "True" ? (
            <True setFavPage={setFavPage} />
          ) : favPage === "Plan" ? (
            <Plan setFavPage={setFavPage} />
          ) : (
            <Question setFavPage={setFavPage} />
          )}
        </div>
        <div>
          <Img1 />
        </div>
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-left: 2em;
  div {
    width: 80%;
    height: 0px;
    background-color: palevioletred;
  }
`;
