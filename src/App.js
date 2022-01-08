import React from "react";
const ThemeContext = React.createContext("light")

function App() {
  const context = React.useContext(ThemeContext)
  const [state, setstate] = React.useState({ age: 22, siblings: 4 })
  const [count, setcount] = React.useState(0)


  

  const increaseage = () => {
    setstate(ele => {
      return { ...ele, age: ele.age + 1 }
    }
    )

  }
  const increasesibiling = () => {
    setstate(ele => {
      return { ...ele, siblings: ele.siblings + 1 }
    }
    )

  }
  return (
   
    <div className="App">
      <center>
      <h1>Today I am {state.age} years old.</h1>
      <button type="button" onClick={increaseage} >Get Older</button>
      <h1>I have {state.siblings} siblings.</h1>
      <button type="button" onClick={increasesibiling} >More Siblings</button>
      <h1>Count value : {count}</h1>
      <button type="button" onClick={() => setcount(ele => ele + 1)} >PLus</button><span>&nbsp;&nbsp;</span> 
      <button type="button" onClick={() => setcount(ele => ele - 1)} >Minus</button>
      <h1>Context value : {context}</h1></center>
    </div>
  
  );
}

export default App;