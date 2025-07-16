from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
from db.session import lifespan
from api.signup import router as signup_router

logging.basicConfig(level=logging.INFO, format="[%(levelname)s] %(message)s")

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(signup_router, prefix="/api")
