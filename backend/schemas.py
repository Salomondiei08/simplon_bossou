from pydantic import BaseModel

class Participant(BaseModel):
    name: str
    firstname: str
    phone_number: str
    email_address: str