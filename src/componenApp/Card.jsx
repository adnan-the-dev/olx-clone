import React from "react";
import "./style.css"

function Info({ users }) {
    console.log(users, 'users');

    const alternativeImage = `https://fiverr-res.cloudinary.com/images/t_small_thumbnail,q_auto,f_auto/gigs/285596247/original/378b07fd800112569f4d2aef19c91d40e4a3bd87/develop-a-web-app-using-react-nest-and-mongodb.jpg`
    return (
        <>
            <div className="main">
                {
                    users.map((item, index) => {
                        return (
                            <div key={index} className="card">


                                <img src={item.img || alternativeImage} className="img" alt="" />
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

