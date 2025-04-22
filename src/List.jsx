function List(props){
  
  //fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabetical
  //fruits.sort((a,b) => b.name.localeCompare(a.name)); //reverse alphabetical
  //fruit.sort((a,b)=> a.calories - b.calories);
  //fruit.sort((a,b)=> b.calories - a.calories);

  //const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map(fruit => <li key={fruit.id}>{fruit.name}&nbsp;<b>{fruit.calories}</b></li>)

  return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
  )
  ;
}

export default List