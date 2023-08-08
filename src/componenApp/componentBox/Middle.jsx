import React, { useState } from 'react'

function Middle({ getDataFromMiddle, toBeEdit }) {

    console.log(toBeEdit, 'toBeEdit');

    const [personName, setPersonName] = useState("")

    const nameChange = (event) => {
        setPersonName(event.target.value)
    }
    const [personAge, setPersonAge] = useState("")

    const ageChange = (event) => {
        setPersonAge(event.target.value)
    }

    const [personHeight, setPersonHeight] = useState("")

    const heightChange = (event) => {
        setPersonHeight(event.target.value)
    }


    const [personId, setPersonId] = useState("")

    const idChange = (event) => {
        setPersonId(event.target.value)
    }

    const [itemImage, setItemImage] = useState("")

    const imgChange = (event) => {
        setItemImage(event.target.value)
    }

    const [checked, setChecked] = useState("")
    const handleClick = () => setChecked(!checked)

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
                <input type="text" id="name" placeholder="Name" onChange={nameChange} value={toBeEdit?.name || ''} />

                <p><label htmlFor='name' >Item Image:</label></p>
                <input type="text" id="name" placeholder="image" onChange={imgChange} value={toBeEdit?.img || ''} />


                <p><label htmlFor='name' >Person age:</label></p>
                <input type="number" id="name" placeholder="Age" onChange={ageChange} value={toBeEdit?.age || ''} />


                <p><label htmlFor='name' >Person height:</label></p>
                <input type="number" id="name" placeholder="Height " onChange={heightChange} value={toBeEdit?.height || ''} />

                <p><label htmlFor='name' >Person Id:</label></p>
                <input type="text" id="name" placeholder="Enter Id " onChange={idChange} value={toBeEdit?.id || ''} />


                <p><label htmlFor='name' >Person Status:</label></p>
                <input onChange={handleClick} checked={toBeEdit?.active ? checked : 0} type="checkbox" value={toBeEdit?.activ || ''} />



                <p> <button type="submit" >Submit</button> </p>
            </form>
        </div>
    )
}

export default Middle