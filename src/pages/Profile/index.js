import React from "react";
import styled from "styled-components";
import CustomDropdown from "../../Component/Dropdown";
import CustomDropdown1 from "../../Component/Dropdown1";
import { Radio, Space, Button } from "antd";
// import Mcqs from '../Mcqs/Index';

const Profile = ({ setFavPage }) => {
  return (
    <>
        <div>
          <Wrapper>
            <h1>
              <b>Company Profile</b>
            </h1>
            <div>
              <Input placeholder="Your Company's Name Here..." />
              <br />
              <Input placeholder="My industry..." />
              <br />
              <br />
              <CustomDropdown />
              <br />
              <CustomDropdown1 />
              <br />
              <Input placeholder="Specific Discloosures" />
              <br />
              <Input placeholder="Invester requirements" />
              <br />
              <br />
              <label>
                <h1>
                  <b>What are you looking For?</b>
                </h1>
              </label>
              <Radio.Group name="radiogroup" defaultValue={1} vertical>
                <Space direction={"vertical"}>
                  <Radio value={1}>Sustainability Personnel</Radio>
                  <br />
                  <br />
                  <Radio value={2}>Technology Tools</Radio>
                  <br />
                  <br />
                  <Radio value={3}>Resources</Radio>
                  <br />
                  <br />
                </Space>
              </Radio.Group>
              <br />
              <br />
              <br />
              <br />
              <Button
                onClick={() => {
                  setFavPage("mcqs");
                }}
                style={{
                  marginLeft: "27em",
                  color: "white",
                  paddingLeft: "3em",
                  paddingRight: "3em",
                  backgroundColor: "#e68420",
                  borderRadius: "5px",
                  marginBottom: "3px",
                  height: "40px",
                  color: "white",
                  width: "130px",
                }}
              >
                <b>Next</b>
              </Button>
            </div>
          </Wrapper>
        </div>
    </>
  );
};

const Wrapper = styled.section`
  padding: 1em;
  background: white;
`;

const Input = styled.input`
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 50px;
  border-color: transparent;
  border-bottom: 2px solid #e68420;
  color: "red";
  outline: none;
  transition: 0.15s;
`;



export default Profile;
