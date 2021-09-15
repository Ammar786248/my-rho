import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import CustomDropdown2 from "../../Component/Dropdown2";

function Question({setFavPage}) {
  return (
      <div>
        <Wrapper>
          <h1>
            <b>Desired Future State</b>
          </h1>
          <div><br />
            <label>
              <h1><b>Desired Timeline?</b></h1>
            </label>
            <br />
            <CustomDropdown2 />
            <br /><br />
            <label>
              <h1><b>Identified barriers in achieving future state</b></h1>
            </label>
            <br />
            <Input placeholder="Type Your answer here..." />
            <Button
            onClick={()=>setFavPage('mcqs')}
              style={{
                // backgroundColor: "#8c8c8c",
                // paddingRight: "2em",
                // borderRadius: "5px",
                // height: "45px",
                // marginTop: "12em",
                // color: "white",
                // width: "140px",
                flex: "1",
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#8c8c8c',
                borderRadius: "6px",
                marginTop: "10em",
                color: "white",
                width: '40%',
                height: 40
              }}
            >
            <b> Back</b>
            </Button>
            
            <Button
              style={{
                // paddingLeft: "2em",
                // marginLeft: "16em",
                // backgroundColor: "#e68420",
                // paddingRight: "2em",
                // borderRadius: "5px",
                // marginTop: "12em",
                // height: "45px",
                // color: "white",
                // width: "140px",
                flex: "1",
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e68420',
                borderRadius: "6px",
                color: "white",
                width: '40%',
                marginLeft: "5em",
                height: 40
              }}
              onClick={()=>{setFavPage('True')}}
            >
              <b>Next</b>
            </Button>
          </div>
        </Wrapper>
      </div>
  );
}

const Wrapper = styled.section`
  padding: 1em;
  background: white;
`;

const Input = styled.input`
  /* background: #00aec9; */
  /* cursor: pointer; */
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  /* border-top: 0rem; */
  height: 50px;
  border-color: transparent;
  border-bottom: 2px solid #e68420;
  color: "red";
  outline: none;
  transition: 0.15s;
  /* &:active {
    background-color: #f1ac15;
  } */
`;

export default Question;
