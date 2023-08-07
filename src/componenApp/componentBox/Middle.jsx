import React, { useEffect, useState } from 'react'





function Middle({ getDataFromMiddle, user }) {

    const [personName, setPersonName] = useState("hjghjgh")

    const nameChange = (event) => {
        setPersonName(event.target.value)
    }
    // console.log(personName,'yellow');
    const [personAge, setPersonAge] = useState(user.age)

    const ageChange = (event) => {
        setPersonAge(event.target.value)
    }
    // console.log(personAge,'hello');

    const [personHeight, setPersonHeight] = useState(user.height)

    const heightChange = (event) => {
        setPersonHeight(event.target.value)
    }

    // console.log(personHeight,'green');

    const [personId, setPersonId] = useState(user.id)

    const idChange = (event) => {
        setPersonId(event.target.value)
    }
    // console.log(personId,'blue');

    const [itemImage, setItemImage] = useState(user.img)

    const imgChange = (event) => {
        // console.log(event);
        setItemImage(event.target.value)
    }

    const [checked, setChecked] = useState(user.active)
    const handleClick = () => setChecked(!checked)

    // console.log(checked, 'hello');
    // useEffect(() => {
    //     setPersonName(user.name);
    //     setPersonAge(user.age);
    //     setPersonHeight(user.height);
    //     setPersonId(user.id);
    //     setItemImage(user.img);
    //     setChecked(user.active);
    // }, [user])
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
                <input type="text" id="name" value={personName} placeholder="Name" onChange={nameChange} />

                <p><label htmlFor='name' >Item Image:</label></p>
                <input type="text" id="name" value={itemImage} placeholder="image" onChange={imgChange} />


                <p><label htmlFor='name' >Person age:</label></p>
                <input type="number" id="name" value={personAge} placeholder="Age" onChange={ageChange} />


                <p><label htmlFor='name' >Person height:</label></p>
                <input type="number" id="name" value={personHeight} placeholder="Height " onChange={heightChange} />

                <p><label htmlFor='name' >Person Id:</label></p>
                <input type="text" id="name" value={personId} placeholder="Enter Id " onChange={idChange} />


                <p><label htmlFor='name' >Person Status:</label></p>
                <input onChange={handleClick} checked={checked} type="checkbox" />



                <p> <button type="submit" >Submit</button> </p>
            </form>
        </div>
    )
}

export default Middle