import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {

  let listingData = plantData.map((item)=> {
    return <PlantCard
    key={item.id}
    id= {item.id}
    name= {item.name}
    image= {item.image}
    price= {item.price}
    />
  })



  return (
    <ul className="cards">{listingData}</ul>
  );
}

export default PlantList;
