import React, { useEffect, useState } from 'react';
import CardBox from "./cardBox";




const Panel = (props) => {
    const [describtion, setDescription] = useState("");
    const [imgFile, setImgFile] = useState(null)
    const [cardList, setCardList] = useState([])



    const handlChange = (value) =>{
        setDescription(value)
    }

    const handleImgFile = value =>{
        if(value){
            setImgFile( URL.createObjectURL(value))

        }
        
    }
    const handleClearImg = () =>{
        setImgFile(null)
    }
    
    useEffect(() =>{
        
        document.querySelector(".cardBox").style.display = "none";
    },[])
    


    
    
    const handleClick = (e)=>{
        const classNameSelect = e.target.id;
        const cardBox = document.querySelector(`.${classNameSelect}`);
        if(cardBox.style.display === "none"){
            cardBox.style.display = "block";
        }
        else{
            cardBox.style.display = "none"
        }
        
    }


    
    const handleSubmit = (value) =>{
        setCardList([...cardList, {
            id : value,
            value :describtion,
            img : imgFile
        }])
    }
    
    const handleDrag = () =>{
        const draggables = document.querySelectorAll(".eachCard");
        const cardContainer = document.querySelectorAll(".card")
        draggables.forEach(draggable =>{
    
            draggable.addEventListener("dragstart", ()=>{
               draggable.classList.add("dragging")
            })

            


            draggable.addEventListener("dragend", ()=>{
                draggable.classList.remove("dragging")
             })

        })
        
        cardContainer.forEach(container =>{
            container.addEventListener("dragover", e=>{
                e.preventDefault();
                const draggable = document.querySelector(".dragging");
                if(draggable !== null){

                    container.appendChild(draggable)
                }
           })
       })
        
    }



    return ( 
        <React.Fragment>
            <div className = "panel">
                <h1>{props.name}</h1>

                <div className={`card${props.name.replace(/\s+/g,'')} card`}>
                    {cardList.map((ele, index) =>{
                        return(
                            
                        <div
                            key = {index}
                            className="eachCard"
                            draggable
                            onDragStart = {() =>handleDrag()}
                            >
                                {ele.value}
                                {(ele.img !== null && <img className="thumbnail" src={ele.img} alt=""/>)}
                                
                        </div>                        
                        )
                    })}

                </div>

                <div 
                    id= {props.name.replace(/\s+/g,'')}
                    className="addCardBtn"
                    onClick = {e => handleClick(e)}
                    >
                    Add a Card
                </div>


                <CardBox 
                onHandleChange = {handlChange}
                onHandleClick = {handleClick}
                onHandleSubmit = {handleSubmit}
                onImgChange = {handleImgFile}
                onHandleClearImg = {handleClearImg}
                describtion = {describtion}
                name = {props.name}
            />

            </div>
          
                
        </React.Fragment>
       
     );
}
 
export default Panel;