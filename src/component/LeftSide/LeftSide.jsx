import React from "react";
import "./left.css"
import CardData from "../RightSide/component/CardData";
import { Card } from "../shared/Card/Card";

function LeftSide() {
    return (
        <>
            <div className="left">
                Left Side

                <Card isAdmin={false} />
            </div>
        </>
    )
}
export default LeftSide;
