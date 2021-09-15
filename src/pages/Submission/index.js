import React from "react";
import { CheckCircleTwoTone} from "@ant-design/icons";
import styled from "styled-components";


function Submission() {
  return (
    <div>
      <Container>
        <div className="icons-list">
        <CheckCircleTwoTone twoToneColor="#e68420" style={{marginTop: "1em"}}/>
        <h1>Thank You!</h1>
        </div>
        <h2><b>Your Submission has been received.</b></h2>
      </Container>
    </div>
  );
}

export default Submission;

const Container = styled.div`
  width: 100%;
  text-align: center;
  div{
      font-size: 80px;
  }
`;
