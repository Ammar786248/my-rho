import React from "react";
import styled from "styled-components";
import { Button, Radio, Space } from "antd";
import {useHistory} from 'react-router-dom';

function Planning({ setFavPage }) {
  let history = useHistory();

  function handleClick() {
    history.push("/Welcome");
  }

  return (
    <div>
      <Wrapper>
        <h1>
          <b>Planning</b>
        </h1>
        <div>
          <label>
            <h1>
              <b>What are u looking for?</b>
            </h1>
          </label>
          <br />
          <Radio.Group name="radiogroup" defaultValue={1} vertical>
            <Space direction={"vertical"}>
              <Radio value={1}>New Strategy Planning</Radio>
              <br />
              <br />
              <br />
              <Radio value={2}>Existing Strategy Improvement</Radio>
            </Space>
          </Radio.Group>
          <Button
            onClick={() => setFavPage("True")}
            style={{
              flex: "1",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#8c8c8c",
              marginTop: "25em",
              color: "white",
              borderRadius: "6px",
              width: "40%",
              height: 40,
            }}
          >
            <b> Back</b>
          </Button>

          <Button
            style={{
              flex: "1",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#e68420",
              color: "white",
              borderRadius: "6px",
              marginLeft: "5em",
              marginTop: "7em",
              width: "40%",
              height: 40,
            }}
            type="button"
            onClick={handleClick}
          >
            <b>Submit</b>
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



export default Planning;
