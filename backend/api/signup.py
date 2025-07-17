from fastapi import APIRouter, Depends, HTTPException
from pymongo.asynchronous.database import AsyncDatabase
import logging
from models.models import SignupRequest, UserInDB, APIResponse
from db.session import get_db
from utils.password import hash_password

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/signup", response_model=APIResponse)
async def signup(user_data: SignupRequest, db: AsyncDatabase = Depends(get_db)):
    users_collection = db.get_collection("users")

    existing_user = await users_collection.find_one({"username": user_data.username})
    if existing_user:
        logger.warning("登録失敗/ユーザーネームの重複: %s", user_data.username)
        raise HTTPException(status_code=409, detail="ユーザーが既に存在します")

    hashed_password = hash_password(user_data.password)
    new_user = UserInDB(
        username=user_data.username,
        hashed_password=hashed_password
    )

    await users_collection.insert_one(new_user.model_dump())
    logger.info("ユーザー登録成功: %s", user_data.username)
    return APIResponse(message="ユーザーの登録に成功しました")
