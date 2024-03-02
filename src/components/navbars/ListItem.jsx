import React from "react";

function ListItem({ navlink, navitem }) {
  return (
    <li>
      <a href={navlink}>{navitem}</a>
    </li>
  );
}

export default ListItem;
