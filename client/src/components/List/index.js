import React from "react";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="collection">{children}</ul>
);

export function ListItem({ children }) {
  return (
    <li className="collection-item">
      {children}
      <i className="material-icons">delete_forever</i>
    </li>
  );
}



export function Dropdown({ children }) {
  return (

    <div type = "text" className="select col s8">
    <select>
      <option value="" disabled selected>Choose your option</option>
      {children}
    </select>
    <label>Choose task:</label>
  </div>

  );
}

export function DropItem({children}) {
  return (
        <option value="">{children}</option>
  );
}
