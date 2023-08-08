import React, { useEffect, useState } from 'react'

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

    const handleUpdate = () => {
        if (toBeEdit) {
            console.log(toBeEdit, 'here');
            setPersonName(toBeEdit?.name || '')
            setPersonAge(toBeEdit?.age || '')
            setPersonHeight(toBeEdit?.height || '')
            setPersonId(toBeEdit?.id || '')
            setItemImage(toBeEdit?.img || '')
        }
    }
    useEffect(() => {
        handleUpdate()
    }, [toBeEdit])



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
                <input type="text" id="name" placeholder="Name" onChange={nameChange} value={personName} />

                <p><label htmlFor='name' >Item Image:</label></p>
                <input type="text" id="name" placeholder="image" onChange={imgChange} value={itemImage} />


                <p><label htmlFor='name' >Person age:</label></p>
                <input type="number" id="name" placeholder="Age" onChange={ageChange} value={personAge} />


                <p><label htmlFor='name' >Person height:</label></p>
                <input type="number" id="name" placeholder="Height " onChange={heightChange} value={personHeight} />

                <p><label htmlFor='name' >Person Id:</label></p>
                <input type="text" id="name" placeholder="Enter Id " onChange={idChange} value={personId} />


                <p><label htmlFor='name' >Person Status:</label></p>
                <input onChange={handleClick} checked={checked} type="checkbox" />



                <p> <button type="submit" >Submit</button> </p>
            </form>
        </div>
    )
}

export default Middle