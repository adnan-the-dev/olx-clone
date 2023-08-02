import React from "react";
import "./style.css"

function Info({ users }) {
    console.log(users, 'users');
    return (
        <>
            <div className="main">
                {
                    users.map((item, index) => {
                        return (
                            <div key={index} className="child">


                                <img src={item.img} className="img" alt="" />
                                <p>
                                    Name: <b>{item.name}</b>
                                </p>
                                <p>
                                    Age: <b>{item.age}</b>
                                </p>
                                <p>
                                    Height: <b>{item.height}</b>
                                </p>
                                <p>
                                    Id: <b>{item.id}</b>
                                </p>
                                <p>
                                    Status: <b>{item.active == true ? "Active" : "Offline"}</b>
                                </p>

                                <div className="status" style={{

                                    backgroundColor: item.active ? 'green' : 'red'
                                }}>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};
export default Info

