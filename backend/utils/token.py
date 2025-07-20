import jwt
from datetime import datetime, timezone, timedelta
from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("JWT_ALGORITHM")


def generate_jwt_token(_id: str) -> str:
    issued_at = datetime.now(timezone.utc)
    expires_at = issued_at + timedelta(days=1)

    payload = {
        "sub": _id,
        "iat": issued_at,
        "exp": expires_at
    }

    generated_jwt = jwt.encode(payload, SECRET_KEY, ALGORITHM)
    return generated_jwt
