import React from "react";
import styled from "styled-components";
import { Radio, Space, Button } from "antd";

const Mcqs = ({ setFavPage }) => {
  return (
      <div>
        <Wrapper>
          <h1>
            <b>Current State</b>
          </h1>
          <div>
            <label>
              <h1>
                <b>Impact Needed on?</b>
              </h1>
            </label>
            <Radio.Group name="radiogroup" defaultValue={1} vertical>
              <Space direction={"vertical"}>
                <Radio value={1}>Net Zero</Radio>
                <br />
                <br />
                <Radio value={2}>ESG</Radio>
                <br />
                <br />
                <Radio value={3}>Lorem Ipsum</Radio>
                <br />
                <br />
              </Space>
            </Radio.Group>
            <br />
            <br />
            <br />
            <br />
            <label>
              <h1>
                <b>Materiality assesment conducted?</b>
              </h1>
            </label>
            <Radio.Group name="radiogroup" defaultValue={1} vertical>
              <Space direction={"vertical"}>
                <Radio value={1}>Yes</Radio>
                <br />
                <br />
                <Radio value={2}>No</Radio>
                <br />
                <br />
              </Space>
            </Radio.Group>
            <br />
            <br />
            <br />
            <label>
              <h1>
                <b>What's been working well?</b>
              </h1>
            </label>
            <Input placeholder="Type Your answer here..." />
            <br />
            <br />
            <Button
              style={{
                flex: "1",
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#8c8c8c',
                color: "white",
                borderRadius: "6px",
                marginTop: "7em",
                width: '40%',
                height: 40
              }}
              onClick={() => {
                setFavPage("profile");
              }}
            >
             <b>Back</b>
            </Button>
            <Button
              onClick={() => {
                setFavPage("question");
              }}
              style={{
                flex: "1",
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#e68420',
                color: "white",
                borderRadius: "6px",
                marginLeft: "5em",
                marginTop: "7em",
                width: '40%',
                height: 40
              }}
            >
              <b>Next</b>
            </Button>
          </div>
        </Wrapper>
      </div>
  );
};

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

export default Mcqs;
