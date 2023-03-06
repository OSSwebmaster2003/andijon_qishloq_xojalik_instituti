import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Department(props) {
  const departments = [
    {
      key: "0",
      label: <a href="">Fizika</a>,
    },
    {
      key: "1",
      label: <a href="">Matematika</a>,
    },
    {
      key: "2",
      label: <a href="">Falsafa</a>,
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Bo`lim</DropdownToggle>
      <DropdownMenu>
        {departments.map((item) => (
          <DropdownItem key={item.id}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default Department;
