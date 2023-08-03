import React, { useState } from 'react'

function Middle(sendData) {

    const [personName, setPersonName] = useState("")

    const nameChange = (event)=>{
        setPersonName(event.target.value)
    }
    // console.log(personName,'yellow');
    const [personAge,setPersonAge]=useState("")

    const ageChange = (event)=>{
        setPersonAge(event.target.value)
    }
    // console.log(personAge,'hello');

    const [personHeight,setPersonHeight]=useState("")

    const heightChange = (event)=>{
        setPersonHeight(event.target.value)
    }

    // console.log(personHeight,'green');

    const [personId,setPersonId] = useState("")

    const idChange =(event)=>{
        setPersonId(event.target.value)
    }
    // console.log(personId,'blue');

    function inputData(){
        const myData ={
            Name:personName,
            Age:personAge,
            Height:personHeight,
            Id:personId,
        }
        sendData(myData)
    }



    return (
        <div style={{
            minHeight: '100px',
            width: '15%',
            border: '1px solid gray',
        }}>
            <form onSubmit={(event)=>{
                inputData()
                event.preventDefault()
            }} style={{
                margin:'12px'
            }}>
                <p><label htmlFor='name' >Person Name:</label></p>
                <input required type="text" id="name" placeholder="Name" onChange={nameChange}/>


                <p><label htmlFor='name' >Person age:</label></p>
                <input required type="number" id="name" placeholder="Age" onChange={ageChange}/>


                <p><label htmlFor='name' >Person height:</label></p>
                <input required type="number" id="name" placeholder="Height " onChange={heightChange}/>

                <p><label htmlFor='name' >Person Id:</label></p>
                <input required type="text" id="name" placeholder="Enter Id " onChange={idChange}/>


               <p> <button type="submit" >Submit</button> </p>
            </form>
        </div>
    )
}

export default Middle