import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const URL= "http://localhost:6001/plants"
  const [plantData, setPlantData] = useState([])

  useEffect(()=>{
    fetch(URL)
    .then(res=> res.json())
    .then(data=> setPlantData(data))
  },[])

  console.log("array:", plantData)

  function addPlant(plant){
    fetch(URL, {
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(plant)
    })
    .then(res=> res.json())
    .then(data=> setPlantData([...plantData, plant]))
  }

  function handleSearchItem(item){
    console.log("searching", item)
    const refinedList = plantData.filter((data)=>(data.name.toLowerCase()).includes(item))
    console.log("refinedList", refinedList)
    setPlantData(refinedList)
  }
 
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search handleSearchItem={handleSearchItem}/>
      <PlantList plantData={plantData}/>
    </main>
  );
}

export default PlantPage;
