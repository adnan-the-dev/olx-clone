import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './component/Header/Header';
import RightSide from './component/RightSide/RightSide';
import LeftSide from './component/LeftSide/LeftSide';
import Center from './component/Center/Center';
// import Header from './component/Header/Header';


function App() {


  const [data, setData] = useState([
    {
      menuName: 'double blast',
      price: "2000",
      totalItem: "12",
    },
  ])


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
    </div>
  );
}

export default App;
