import React from "react";
import "./Appbar.css"

function Appbar({ changeTheme }) {

    function callAppBar() {
        // changeTheme()
        console.log(changeTheme);
    }
    return (
        <>

            <div><button>All Item</button></div>
            <div><button>Delivery</button></div>
            <div><button>Kitchen</button></div>
            <div><button onClick={callAppBar}>Change Mode</button></div>

        </>
    )
}
export default Appbar;
