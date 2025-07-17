from fastapi import APIRouter, Depends, HTTPException
from pymongo.asynchronous.database import AsyncDatabase
import logging
from models.models import AuthRequest, APIResponse
from db.session import get_db
from utils.password import verify_password

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/login", response_model=APIResponse)
async def login(user_data: AuthRequest, db: AsyncDatabase = Depends(get_db)):
    users_collection = db.get_collection("users")

    user = await users_collection.find_one({"username": user_data.username})
    if not user:
        logger.warning("ログイン失敗/存在しないユーザー: %s", user_data.username)
        raise HTTPException(status_code=401, detail="ユーザーが存在しません")

    isVerified = verify_password(user_data.password, user["hashed_password"])
    if not isVerified:
        logger.warning("ログイン失敗/パスワードの不一致: %s", user_data.username)
        raise HTTPException(status_code=401, detail="パスワードが間違っています")

    logger.info("ログイン成功: %s", user_data.username)
    return APIResponse(message="ログインに成功しました")
