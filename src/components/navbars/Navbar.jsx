import React from "react";
import "./Navbar.css";
import ListItem from "./ListItem";
const NAV_ITEMS = [
  {
    id: 4,
    link: "#",
    value: "Home",
  },
  {
    id: 1,
    link: "#",
    value: "About",
  },
  {
    id: 2,
    link: "#",
    value: "Portfolio",
  },
  {
    id: 3,
    link: "#",
    value: "Contact",
  },
];

function Navbar() {
  return (
    <nav className='header'>
      <h1 className='logo'>
        <a href='#'>Profile</a>
      </h1>
      <ul className='main-nav'>
        {NAV_ITEMS.map((item) => (
          <ListItem
            key={item.id}
            navId={item.id}
            navlink={item.link}
            navitem={item.value}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
