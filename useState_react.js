import React from "react";
import {useState} from "react";

function car(){
  const [car, setCar] = useState({
    brand: "ford",
    color: "red",
    model: "mustang",
    year: 1990
  });
  const updateColor = () => {
    setCar((P) => {
      return { ...P, color: "blue"}
    });
  }
  return (
    <p> my {car.brand} </p>
      <p>it's {car.color} {car.model} from 
        {car.year} </p>
      <button type="button" onClick = {updateColor}> blue </button>
  );
}

car();