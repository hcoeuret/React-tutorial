import React, {useState} from "react";

function MyComponent(){

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")

  function handleAddCar(){
    const newCar = {year : carYear, make: carMake, model: carModel}
    setCars(c => [...c, newCar])
    setCarMake("");
    setCarModel("");
    setCarYear(new Date().getFullYear());
  }

  function handleRemoveCar(index){
    setCars(cars.filter((_, i) => i !== index));
  }

  function handleYearChange(event){
    setCarYear(event.target.value);
  }

  function handleMakeChange(event){
    setCarMake(event.target.value);
  }

  function handleModelChange(event){
    setCarModel(event.target.value);
  }

  return(<div>
    <h2>List of Car Objects</h2>
    <ul>
      {cars.map((car, i) => <li key={i} onClick={() => handleRemoveCar(i)}>{car.make} {car.model} {car.year}</li>)}
    </ul>

    <input type="number" value={carYear} onChange={handleYearChange}/><br/>
    <input type="text" value={carMake} placeholder="Enter Car make" onChange={handleMakeChange}/><br/>
    <input type="text" value={carModel} placeholder="Enter Car model" onChange={handleModelChange}/><br/>
    <button onClick={handleAddCar}>Add car</button>
  </div>);
}

export default MyComponent