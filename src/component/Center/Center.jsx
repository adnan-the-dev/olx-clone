import React, { useState } from "react";
import "./Center.css"

function Center({ callFunc }) {

    const [menuName, setMenuName] = useState("")

    const menuNameChange = (event) => {
        setMenuName(event.target.value)
    }

    const [menuPrice, setmenuPrice] = useState("")

    const menuPriceChange = (event) => {
        setmenuPrice(event.target.value)
    }

    const [total, settotal] = useState("")
    const totalItem = (event) => {
        settotal(event.target.value)
    }

// console.log(total);

    function callingProp() {
        const menu = {
            menuName: menuName,
            price: menuPrice,
            totalItem: total,
        }

        callFunc(menu)
    }

    return (
        <>
            <div className="parent">
                <div className="child">
                    <form onSubmit={(event) => {
                        callingProp()

                        event.preventDefault()
                    }} >
                        <label htmlFor='name' >Menu Name</label>
                        <input required type="text" id="name" placeholder="Menu Name " onChange={menuNameChange} />


                        <label htmlFor='name' >Menu Price</label>
                        <input required type="number" id="name" placeholder="menu Price " onChange={menuPriceChange} />


                        <label htmlFor='name' >Total Items</label>
                        <input required type="number" id="name" placeholder="Total Items " onChange={totalItem} />

                        <button type="submit" >Submit</button>
                    </form>


                </div>
            </div>
        </>
    )
}
export default Center;
