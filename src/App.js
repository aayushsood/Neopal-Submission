import logo from './logo.svg';
import './App.css';
import CardComponent from './CardComponent/CardComponent';
import json from "./MockJson/mockjson.json"
import ModalComponent from './ModalComponent/ModalComponent';
import { useState } from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="main-div">
      {json.map(({ name, email, number, url }) => {
        return <CardComponent setOpenModal={setOpenModal} name={name} email={email} phoneNumber={number} url={url} />
      })}

      <ModalComponent open={openModal} setOpen={setOpenModal} />
    </div>
  );
}

export default App;
