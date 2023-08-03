import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './component/Header/Header';
import RightSide from './component/RightSide/RightSide';
import LeftSide from './component/LeftSide/LeftSide';
import Center from './component/Center/Center';
import Appbar from './component/Header/components/Appbar';
import Info from './componenApp/Card';
import Middle from './componenApp/componentBox/Middle';
import Right from './componenApp/componentBox/Right';
// import Header from './component/Header/Header';


function App() {

  // function changeTheme() {
  //   console.log("jgjhg");
  // }



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



  const [data, setData] = useState([])


  function callFunc(menu) {
    setData([...data, menu])
  }



  return (

    <div className='cover'>
      {/* <Header />
      <div className='main'>
        <LeftSide />
        <Center callFunc={callFunc} />
        <RightSide data={data} callFunc={callFunc} />
      </div>
      <div>
      </div> */}

      {/* <Info users={users} /> */}
      <Middle/>
      <Right/>


    </div>
  );
}

export default App;
