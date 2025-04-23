import React, {useState} from "react";

function MyComponent(){

  const [foods, setFoods] = useState(["Apple","Orange","Banana"]);

  function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...f, newFood])
  }

  function handleRemoveFood(i){
    setFoods(foods.filter((element, index)=> index !== i));
  }

  return(<div>
    <h2>List of food</h2>
    <ul>
      {foods.map((f, i) => <li key={i} onClick={() => handleRemoveFood(i)}>{f}</li> )}
    </ul>
    <input type='text' id='foodInput' placeholder="Enter food name"></input>
    <button onClick={handleAddFood}>Add Food</button>
  </div>);
}

export default MyComponent