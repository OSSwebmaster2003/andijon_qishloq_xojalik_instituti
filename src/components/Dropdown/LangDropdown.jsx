import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import language from "../../assets/icons/language.svg";
import "./langDropdown.scss";

function LangDropdown(props) {
  const items = [
    {
      label: <a href="">Uz</a>,
      key: "0",
    },
    {
      label: <a href="">En</a>,
      key: "1",
    },
    {
      label: <a href="">Rus</a>,
      key: "2",
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a>
        <Space>
          <img src={language} alt="" />
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default LangDropdown;
