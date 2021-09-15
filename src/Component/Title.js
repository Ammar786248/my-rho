import React from 'react';
import styled from "styled-components";
import "antd/dist/antd.css";

function Heading (){
    return(
        <>
        <Title>
              RHO AI
        </Title>
        </>
    );
};


export default Heading;

const Title = styled.h1`
  color: -webkit-linear-gradient(0deg, #e68420 30%, #ccc58a 90%);
  padding-left: 15px;
  /* padding-top: 1em; */
  font-size: 2.7rem;
  background: -webkit-linear-gradient(#e68420, #ccc58a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;