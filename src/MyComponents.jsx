import React, {useState} from 'react'

function MyComponent(){

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(18);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob")
    console.log(name)
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(
    <div>
      <p>name: {name}</p>
      <button onClick={updateName}>SetName</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>incrementAge</button>
      <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
      <button onClick={toggleEmployedStatus}>toggleStatus</button>
    </div>
  );

}

export default MyComponent