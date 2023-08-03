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
                            <div key={index} className="card">


                                <img src={item.img} className="img" alt="" />
                                <span className="title">{item.name}</span>
                                <div className="body">
                                    <div>
                                        Age: <b>{item.age}</b>
                                    </div>
                                    <div>
                                        Height: <b>{item.height}</b>
                                    </div>
                                    <div>
                                        Id: <b>{item.id}</b>
                                    </div>
                                    
                                    <div className="active">

                                        Status: <b>{item.active == true ? "Active" : "Offline"}</b>


                                        <div className="status" style={{

                                            backgroundColor: item.active ? 'green' : 'red'
                                        }}>
                                        </div>
                                    </div>

                                    <div className="active">

                                        <b>{item.age >= 25 ? 'eligible' : 'not eligible'}</b>



                                        <div className="status" style={{
                                            backgroundColor: item.age >= 25 ? 'green' : 'red'
                                        }}>
                                        </div>
                                    </div>
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

