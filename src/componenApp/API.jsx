import React, { useEffect, useState } from 'react'

export default function API() {
    
    const [apiend, setApiend] = useState('')

    console.log(apiend);
    async function callApi() {
        const response = await fetch('https://dummyjson.com/products/1').
            then(res => res.json()).
            then(json => json)
        setApiend(response)
    }

    useEffect(() => {
        callApi()
    }, [])

   
    return (
        <div>

            <p>{apiend.brand}</p>
            <p>{apiend.category}</p>
            <p>{apiend.description}</p>
            <p>{apiend.discountPercentage}</p>
            <p>{apiend.price}</p>
            <p>{apiend.rating}</p>
            <p>{apiend.stock}</p>
            <p>{apiend.title}</p>
            <p>{apiend.title}</p>

            <img src={apiend.thumbnail} alt="" />

            {apiend?.images?.map((img, ind)=>(
                <div key={ind} >
                    <img src={img} alt="" />
                </div>
            ))}
            
        </div>
    )
}
