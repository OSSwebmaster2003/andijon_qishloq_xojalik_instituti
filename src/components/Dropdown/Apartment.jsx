import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Apartment(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const apartments = [
    {
      label: <a href="">1chi bino</a>,
      key: "3",
    },
    {
      label: <a href="">2chi bino</a>,
      key: "4",
    },
    {
      label: <a href="">3chi bino</a>,
      key: "5",
    },
  ];
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Bino</DropdownToggle>
      <DropdownMenu>
        {apartments.map((item) => (
          <DropdownItem key={item.id}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Apartment;
