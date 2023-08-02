import React, { useEffect } from "react";
import '../right.css'

import sun1 from '../../../assets/sun1.jpeg'
import sun2 from '../../../assets/sun2.jpeg'


function CardData({ data }) {
    const imageLink = 'https://i.ytimg.com/an_webp/adzFNSlzLX0/mqdefault_6s.webp?du=3000&sqp=CKHLjqYG&rs=AOn4CLA50YeaUPVjOOy6pgu3xQqWyaZ2fA'
    return (
        <>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
            }}>

                {data?.map((item, index) => {
                    const even = index % 2 == 0
                    return (


                        <div className="card"
                            key={index}
                            style={{
                                minHeight: '150px',
                                width: '150px',
                                padding: '5px',
                                border: '1px solid gray',
                                borderRadius: '7px',
                                boxShadow: "5px 5px 6px -2px rgba(128,128,128,0.78)",
                                color: "red"

                            }} >
                            <img src={even ? sun1 : sun2} alt="any" />
                            <h4>
                                menuName: {item.menuName}
                            </h4>
                            <h4>
                                price: {item.price}
                            </h4>
                            <h4>
                                totalItem: {item.totalItem}
                            </h4>
                        </div>

                    )
                })}


            </div>

        </>
    )
};
export default CardData;