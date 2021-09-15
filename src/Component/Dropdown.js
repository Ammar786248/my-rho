import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="1">1st</Menu.Item>
    <Menu.Item key="2">2nd</Menu.Item>
    <Menu.Item key="3">3rd</Menu.Item>
  </Menu>
);

function CustomDropdown() {
  return (
    <>
      <Dropdown overlay={menu}>
        <Button
          style={{
            width: "397px",
            fontSize: "18px",
            textAlign: "left",
            borderTop: "0px",
            borderLeft: "0px",
            borderRight: "0px",
            borderbottom: "2px",
            borderBottomColor: "#e68420"
          }}
        >
          Select Dictionary
          {/* {Props.title} */}
          &nbsp;
          <DownOutlined />
        </Button>
      </Dropdown>
      <br />
    </>
  );
}

export default CustomDropdown;
