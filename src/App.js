import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './component/Header/Header';
import RightSide from './component/RightSide/RightSide';
import LeftSide from './component/LeftSide/LeftSide';
import Center from './component/Center/Center';
import Appbar from './component/Header/components/Appbar';
// import Header from './component/Header/Header';


function App() {

  function changeTheme() {
    console.log("jgjhg");
  }



  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'Uzair',
      age: '24',
      active: true,
      height: 6.2,
      img: ''
    },
    {
      id: '2',
      name: 'Adnan',
      age: '21',
      active: true,
      height: 6.1,
      img: ''
    },
    {
      id: '3',
      name: 'Farhan',
      age: '25',
      active: true,
      height: 5.7,
      img: ''

    },
    {
      id: '4',
      name: 'Zeeshan',
      age: '25',
      active: true,
      height: 5.7,
      img: ''
    }
  ])
  const [data, setData] = useState([])


  function callFunc(menu) {
    setData([...data, menu])
  }



  return (

    <div className='cover'>
      <Header />
      <div className='main'>
        <LeftSide />
        <Center callFunc={callFunc} />
        <RightSide data={data} callFunc={callFunc} />
      </div>
      <div>
        {/* <Appbar onChangeTheme={changeTheme} /> */}
      </div>


    </div>
  );
}

export default App;
