
function Button(){

  let count = 0;

  const handleClick = (e) => e.target.textContent = "Ouch";
  
  const handleClick2 = (name) => {
    if(count < 3){
      count++;
      console.log(`You clicked me ${count} time/s`)
    }
    else{
      console.log(`${name} stop clicking me`)
    }
  } 

  return(
    <button onClick={(e) => handleClick(e)}>Click me</button>
  )
}

export default Button