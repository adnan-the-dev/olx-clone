import React, { useEffect, useState } from 'react'
import './SheardFile/style.css'
import './right.css'
function Right({ users, editUserFun }) {

  const categories = ['all', 'active', 'In-active']

  const alternateImg = `https://static.thenounproject.com/png/3324336-200.png`

  const [userId, setUserId] = useState("");
  const [userEdit, setUserEdit] = useState("")

  const [categroy, setCateGroy] = useState("all")

  const activeUsers = users.filter((user) => user.active)
  const inActiveUsers = users.filter((user) => !user.active)

  const filteredArray = categroy === "all" ? users : categroy === "active" ?
    activeUsers : categroy === "In-active" ?
      inActiveUsers : null



  const userIndex = users.findIndex((item) => item.id == userId)

  const userEditIndex = users.findIndex((item) => item.id == userEdit)

  editUserFun({ index: userEditIndex, id: userEdit })


  const removeUser = () => {
    users.splice(userIndex, 1)
    setUserId("")
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        height: '100%',
        width: '100%',
        border: '1px solid red'
      }}>

        <div className='user-btn'>
          {categories.map((cat, ind) => (
            <button style={{
              backgroundColor: categroy == cat ? 'rgb(61, 68, 68)' : '#4CAF50'
            }} key={ind} onClick={() => { setCateGroy(cat) }}>{cat}</button>
          ))}
        </div>
        <div className='main'>



          {
            filteredArray.map((item, index) => {

              return (
                <div key={index} className='card'>
                  <div>
                    <svg onClick={() => setUserEdit(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="edit">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>

                    <svg onClick={() => setUserId(item.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="delete" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                  <img src={item.img || alternateImg} alt="" className='img' />
                  <span className='title'>{item.name}</span>
                  <div className='body'>
                    <div>
                      Age:<b>{item.age}</b>
                    </div>

                    <div>
                      Height:<b>{item.height}</b>
                    </div>

                    <div>
                      Id:<b>{item.id}</b>
                    </div>

                    <div className='active'>
                      Status:<b>{item.active == true ? "Active" : "offline"}</b>
                      <div className='status' style={{
                        backgroundColor: item.active ? "green" : "red"
                      }}>

                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>
      {
        userId && (
          <div style={{
            position: 'absolute',
            border: '1px dashed gary',
            transform: "translate(-50%, -50%)",
            backgroundColor: 'cyan',
            top: "50%",
            left: "50%",
            boxShadow: "4px 4px 2px rgba(0,0,0,.5)",
            padding: "8px"
          }}>
            userId : {userId}
            <p>Are you sure to delete?</p>
            <button onClick={() => removeUser()}>Delete</button>
          </div>
        )
      }
    </div>

  )
}

export default Right