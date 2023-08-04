import React from 'react'
import '../style.css'
function Right({ user }) {

  const alternateImg = `https://static.thenounproject.com/png/3324336-200.png`
  return (
    <div style={{
      height: '100%',
      width: '100%',
      border: '1px solid red'
    }}>
      <div className='main'>
        {
          user.map((item, index) => {
            return (
              <div key={index} className='card'>
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
  )
}

export default Right