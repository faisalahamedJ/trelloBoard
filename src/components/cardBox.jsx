import React from "react";



const CardBox = (props) => {

    const onHandleClose = (e) =>{
        e.target.parentNode.style.display = "none";
        
    }
    
    

    function handlSubmit(e){
        const selectClass = e.target.id;
        props.onHandleSubmit(selectClass);
       onHandleClose(e);
    }

    function handleImageChange(e){
            props.onImgChange(e.target.files[0])

    }

  
   

    function handleChange(e){
        props.onHandleChange(e.target.value)
    }

    return ( 


        <div className={`cardBox ${props.name.replace(/\s+/g,'')}`}>
            <input 
                type="text"  
                placeholder="Description"
                value = {props.describtion}
                onChange = {handleChange}
                
            />
            <br/>
            <br/>
            <div className="imgUploader">
            <input 
                type="file"
                onChange = {handleImageChange}
            />
             <span               
               onClick = {props.onHandleClearImg}                
            >
                &#10006;</span>
            </div>
            <br/>
            <br/>
            <div 
                id = {props.name.replace(/\s+/g,'')}
                onClick={e =>handlSubmit(e)}
                className = "cardSubmitBtn"
            >
                
                Add to {props.name}
            </div>
            <span 
                className="cross"
                onClick = {(e) =>onHandleClose(e)}
                
            >
                &#10006;</span>
        </div>

     );
}
 
export default CardBox;