import logo from './logo.svg';
import './App.css';
import CardComponent from './CardComponent/CardComponent';
import json from "./MockJson/mockjson.json"
import ModalComponent from './ModalComponent/ModalComponent';
import { useEffect, useState } from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [userIndex, setUserIndex] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    website: ""
  })

  console.log(userIndex, " this is user index");

  useEffect(() => {
    setData(json);
  }, [])

  return (
    <div className="main-div">
      {data.map(({ name, email, number, url }, index) => {
        return <CardComponent index={index} setUserIndex={setUserIndex} setUserData={setUserData} setOpenModal={setOpenModal} name={name} email={email} phoneNumber={number} url={url} setData={setData} data={data} />
      })}

      <ModalComponent userIndex={userIndex} data={data} setData={setData} setUserData={setUserData} userData={userData} open={openModal} setOpen={setOpenModal} />
    </div>
  );
}

export default App;
