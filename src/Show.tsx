import React from "react";
import {Info} from "./Interfaces"


function Show({ element }: { element: Info }) {
  console.log(element);
  const { name, image }: { name: string; image: string } = element;
  return (
    <div className="info">
      <img src={image} alt={image} width="200" height="200"></img>
      <p>{name}</p>
    </div>
  );
}
export default Show;
