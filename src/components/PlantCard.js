import React, {useState} from "react";

function PlantCard({id, name, image, price}) {


const [isSoldOut, setIsSoldOut] = useState(false)

function updateTag(){
  console.log("clicked")
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button onClick={updateTag}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
