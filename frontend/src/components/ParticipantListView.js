
import Participantltem from './Participant'

export default function ParticipantView(props) {
    return (
        <div>
            <ul>
                {props.ParticipantList.map(Participant => <Participantltem Participant={Participant} />)}
            </ul>
        </div>
    )
}