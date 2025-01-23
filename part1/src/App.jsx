import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {

  /*  Estado de un componente, controlador de eventos y propiedades
  
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter);
  
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  const increaseByOne = () =>{
    console.log('Increasing, value before: ', counter);
    setCounter(counter + 1);
  }
  
  
  const decreaseByOne = () => {
    console.log('Decreasing, value before: ', counter);
    setCounter(counter - 1);
  } 
  
  const setToZero = () => {
    console.log('Resetting, value before: ', counter);
    setCounter(0);
  } 
  
  return(
    <div>
    <Display counter={counter}/>
    <Button onClick={increaseByOne} text='plus' />
    <Button onClick={setToZero} text='zero' />
    <Button onClick={decreaseByOne} text='minus' />
    </div>
  )
  */

  //Estado de un componente mas complejo

  /*
  const [clicks, setCilcks] = useState({
    left: 0,
    right: 0
  })

  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1
    }
    setCilcks(newClicks);
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setCilcks(newClicks);
  }
  
  
  const handleLeftClick = () => setCilcks({...clicks, left: clicks.left + 1});
  const handleRightClick = () => setCilcks({...clicks, right: clicks.right + 1});
  
  // El estado siempre se debe establecer y modificar estableciendo el estado de un nuevo objeto.
  
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1;
    console.log('left before', left)
    setLeft(updateLeft)
    console.log('left after', left)
    setTotal(updateLeft + right)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }
  
  
  
  return(
    <div>
    {left}
    <Button onClick={handleLeftClick} text='left' />
    <Button onClick={handleRightClick} text='right' />
    {right}
    <History allClicks={allClicks} />
    </div>
  )
  */

  // Revision de controladores y eventos

  //Funcion que devuelve una funcion

  const [value, setValue] = useState(10)

  const hello = () =>{
    const handler = () => console.log('Hello World')
    return handler
  }

  return (
    <div>
      {value}
      <Button onClick={hello()} text='button' />
    </div>
  )
  
  
}

export default App;