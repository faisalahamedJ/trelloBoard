import React from "react";

const CreatePanel = (props) => {
    return ( 
        <div className="createPanelContainer">
            <div 
                className ="createPanelBtn"
                onClick = {props.onHandleCreatePanel}
                >
                Create Panel
            </div>
  
            <div className="createPanelInputContainer">
                <input 
                    className="createPanelInput" 
                    value={props.inputValue} 
                    onChange={props.onHandleChange} 
                    type="text"
                    placeholder = "Panel Name"
                    ></input>

                    <div className="msg">*Task Name already exists</div>

                {props.inputValue.length !== 0 && <div 
                    className ="createBtn"
                    onClick = {props.onHandleSubmit}
                >
                        Create 
                </div>}
                
            </div>

        </div>
  
     );
}
 
export default CreatePanel;