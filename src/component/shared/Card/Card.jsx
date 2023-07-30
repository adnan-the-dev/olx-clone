import React from "react";

export function Card({ isAdmin }) {
    return (
        <>
            <div className="card"
                style={{
                    minHeight: '150px',
                    width: '150px',
                    padding: '5px',
                    border: '1px solid gray',
                    borderRadius: '7px',
                    boxShadow: "5px 5px 6px -2px rgba(128,128,128,0.78)",
                    color: "red"

                }} >


                {
                    isAdmin ? (
                        <>
                            <h4>
                                Admin
                            </h4>
                            <button>View User</button>
                        </>

                    ) : (
                        <>
                            <h4>User Name</h4>

                            <button>Details</button>
                        </>

                    )
                }



            </div>
        </>
    )
}

