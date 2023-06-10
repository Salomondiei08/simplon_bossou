import React, { useState, useEffect} from 'react';
import './App.css';
import ParticipantView from './components/ParticipantListView';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {

  const [ParticipantList, setParticipantList] = useState([{}])
  const [name, setTitle] = useState('') 
  const [firstname, setFirstname] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [email_address, setEmail_address] = useState('')
  
  // Read all Participants
  useEffect(() => {
    axios.get('https://simplon_bossou-1-m9031610.deta.app/api/participants')
      .then(res => {
        setParticipantList(res.data)
      })
  });

  // Post a Participant
  const addParticipantHandler = () => {
    axios.post('https://simplon_bossou-1-m9031610.deta.app//api/participants/', {'name': name, 'firstname': firstname, 'phone_number': phone_number, 'email_address':email_address })
      .then(res => console.log(res))
};

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"yellow", "marginTop":"15px"}} >
      <h1 className="card text-white bg-danger mb-1" styleName="max-width: 20rem;">SIMPLON</h1>
     <div className="card-body">
      <h5 className="card text-white bg-dark mb-3">Ajouter un participant</h5>
      <span className="card-text"> 
        <input className="mb-2 form-control nameIn" onChange={event => setTitle(event.target.value)} placeholder='Nom'/> 
        <input className="mb-2 form-control firstnameIn" onChange={event => setFirstname(event.target.value)}   placeholder='Prenom'/>
        <input className="mb-2 form-control phone_numberIn" onChange={event => setPhone_number(event.target.value)}   placeholder='Numéro de Tel'/>
        <input className="mb-2 form-control email_addressIn" onChange={event => setEmail_address(event.target.value)}   placeholder='Adresse Email'/>
      <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={addParticipantHandler}>Ajouter un Participant</button>
      </span>
      <h5 className="card text-white bg-dark mb-3">Tous les participants</h5>
      <div >
      <ParticipantView ParticipantList={ParticipantList} />
      </div>
      </div>

    </div>
  );
}

export default App;
