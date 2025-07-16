from pydantic import BaseModel, Field
from datetime import datetime, timezone
from typing import Optional


class UserCreate(BaseModel):
    username: str
    password: str


class UserInDB(BaseModel):
    username: str
    hashed_password: str
    created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc)
    )


class APIResponse(BaseModel):
    message: str
    inserted_id: Optional[str]
