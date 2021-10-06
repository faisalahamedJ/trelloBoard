import React, { useState, useEffect } from "react";
import Panel from "./components/panel";
import CreatePanel from "./components/createPanel"
import "./style.css";

function App() {
  const [panels,setPanel] = useState([]);
  const [inputValue, setInputValue] = useState("")


  useEffect(() =>{
   const panelSelect = document.querySelector(".createPanelInputContainer");
   panelSelect.style.display = 'none';
  },[])


  function handleCreatePanel(){
   const panelSelect = document.querySelector(".createPanelInputContainer");
   if(panelSelect.style.display === 'none'){
    panelSelect.style.display = 'flex'
   }
   else{
     panelSelect.style.display = 'none'
   }
  }


  function handleChange(e){
    setInputValue(e.target.value);
    document.querySelector(".msg").style.display = "none"
  }

  function handleSubmit(){
    const exists = panels.includes(inputValue)
    if(!exists){
      setPanel([...panels, inputValue]);
      handleCreatePanel();
      
    }
    else{
      document.querySelector(".msg").style.display = "block"
    }
  }

  return (
    <React.Fragment>
        <CreatePanel
          onHandleCreatePanel = {handleCreatePanel}
          onHandleChange = {handleChange}
          inputValue = {inputValue}
          onHandleSubmit = {handleSubmit}
        />


      <div className="container">
       {panels.map((ele,index) =>{
          return (<Panel key={index}  name = {ele} />)
        })
         }
      
    </div>
    </React.Fragment>
  );
}

export default App;
