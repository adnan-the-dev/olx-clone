import React, { useEffect } from "react";
import "./right.css"
import CardData from "./component/CardData";
import { Card } from "../shared/Card/Card";

function RightSide({ data , users }) {

    return (
        <>
            <div className="right">
                Right Side
                {/* <Card isAdmin={true} /> */}
                
                <CardData data={data} users={users} />

            </div>
        </>
    )
}
export default RightSide;
