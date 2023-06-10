from sqlalchemy import Column, Integer, String
from database import Base

class Participant(Base):
    __tablename__ = 'participant'


    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String)
    firstname = Column(String)
    phone_number = Column(String)
    email_address = Column(String)
