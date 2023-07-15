import React, {useState} from "react";

function PlantCard({id, name, image, price}) {


const [isInStock, setIsInStock] = useState(true)

function updateTag(){
  console.log("clicked")
  setIsInStock(!isInStock)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={updateTag}>In Stock</button>
      ) : (
        <button onClick={updateTag}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
