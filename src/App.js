import React, { useEffect, useState } from 'react';
import './App.css'
import Middle from './component/CRUD/Middle';
import Right from './component/CRUD/Right';

function App() {

  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'Uzair',
      age: '30',
      active: true,
      height: 6.2,
      img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
    },
    {
      id: '2',
      name: 'Adnan',
      age: '21',
      active: false,
      height: 6.1,
      img: 'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-5-scaled.jpg'
    },
    {
      id: '3',
      name: 'Farhan',
      age: '35',
      active: true,
      height: 5.7,
      img: 'https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg'

    },
    {
      id: '4',
      name: 'Zeeshan',
      age: '25',
      active: false,
      height: 5.7,
      img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg'
    }
  ])


  function getDataFromMiddle(data) {
    setUsers([...users, data])

  }


  const [toBeEdit, setToBeEdit] = useState({})

  function editUserFun({ index, id }) {
    setToBeEdit(users.find((user) => user.id === id))
  }

  function nowEdit(myData) {
    const userIndex = users.findIndex((user) => user.id === myData.id)
    users[userIndex] = myData
    setUsers([...users])
  }

  return (
    <div className='cover'>
      <Middle getDataFromMiddle={getDataFromMiddle} toBeEdit={toBeEdit} users={users} nowEdit={nowEdit} />
      <Right users={users} editUserFun={editUserFun} />
    </div>
  );
}

export default App;
