import React from "react";
import "./Breadcrumb.css"

export const Breadcrumb: React.FC<{ categories?: string[] }> = ({ categories }) => {
  return (
    categories ? (
      <ul className="Breadcrumb">
        {categories.map((category, index) => { return <li key={index}>{category}</li> })}
      </ul>
    ) : (<></>)
  );
}
