from sqlalchemy.orm import Session
from models import Participant

def get_all_participants(db: Session):
    return db.query(Participant).all()


def add_participant(db: Session, participant: Participant):
    db_participant = Participant(name=participant.name, firstname=participant.firstname,
                            phone_number=participant.phone_number, email_address=participant.email_address)
    db.add(db_participant)
    db.commit()
    db.refresh(db_participant)
    return db_participant
