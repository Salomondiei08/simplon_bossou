
import axios from 'axios'
import React from 'react'

function Participantltem(props) {
  
    return (
        <div>
            <p>
            <span style={{ fontWeight: 'bold, underline' }}>{props.Participant.name}, {props.Participant.first_anem}, {props.Participant.phone_number}, {props.Participant.email_address} </span>

                <hr></hr>
            </p>
        </div>
    )
}

export default Participantltem;