import React, { useEffect, useState } from 'react'

function Middle({ getDataFromMiddle }) {


    const [personName, setPersonName] = useState("")

    const nameChange = (event) => {
        setPersonName(event.target.value)
    }
    // console.log(personName,'yellow');
    const [personAge, setPersonAge] = useState("")

    const ageChange = (event) => {
        setPersonAge(event.target.value)
    }
    // console.log(personAge,'hello');

    const [personHeight, setPersonHeight] = useState("")

    const heightChange = (event) => {
        setPersonHeight(event.target.value)
    }

    // console.log(personHeight,'green');

    const [personId, setPersonId] = useState("")

    const idChange = (event) => {
        setPersonId(event.target.value)
    }
    // console.log(personId,'blue');

    const [itemImage, setItemImage] = useState("")

    const imgChange = (event) => {
        // console.log(event);
        setItemImage(event.target.value)
    }

    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)

    // console.log(checked, 'hello');

    function inputData() {

        const myData = {
            name: personName,
            age: personAge,
            height: personHeight,
            id: personId,
            img: itemImage,
            active: checked,
        }

        getDataFromMiddle(myData)

    }

    // useEffect(() => {


    //     setPersonName("")
    //     setPersonAge("")
    //     setPersonHeight("")
    //     setPersonId("")
    //     setItemImage("")
    //     setChecked(!checked)

    // }, [])



    return (
        <div style={{
            minHeight: '100px',
            width: '15%',
            border: '1px solid gray',
        }}>
            <form onSubmit={(event) => {
                event.preventDefault()
                inputData()
            }}
                style={{
                    margin: '12px'
                }}>
                <p><label htmlFor='name' >Person Name:</label></p>
                <input  type="text" id="name" placeholder="Name" onChange={nameChange} />

                <p><label htmlFor='name' >Item Image:</label></p>
                <input  type="text" id="name" placeholder="image" onChange={imgChange} />


                <p><label htmlFor='name' >Person age:</label></p>
                <input  type="number" id="name" placeholder="Age" onChange={ageChange} />


                <p><label htmlFor='name' >Person height:</label></p>
                <input  type="number" id="name" placeholder="Height " onChange={heightChange} />

                <p><label htmlFor='name' >Person Id:</label></p>
                <input  type="text" id="name" placeholder="Enter Id " onChange={idChange} />


                <p><label htmlFor='name' >Person Status:</label></p>
                <input onChange={handleClick} checked={checked} type="checkbox" />



                <p> <button type="submit" >Submit</button> </p>
            </form>
        </div>
    )
}

export default Middle