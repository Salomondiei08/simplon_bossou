from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import Base
from crud import add_participant, get_all_participants
from database import SessionLocal, engine
from schemas import Participant
from sqlalchemy.orm import Session

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Dependency
Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get('/')
async def root():
    return {"Hello, welcome to the Version 1 of CRUD API"}


@app.get('/api/participants')
async def fetch_all_participants(db: Session = Depends(get_db)):
    response = get_all_participants(db=db)
    return response


@app.post('/api/participants/')
async def create_participants(participant: Participant, db: Session = Depends(get_db)):
    response = add_participant(participant=participant, db=db)
    if response:
        return response
    raise HTTPException(400, "Something went wrong !!!")
