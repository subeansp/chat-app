from fastapi import APIRouter, Depends, HTTPException
from pymongo.asynchronous.database import AsyncDatabase
import logging
from models.models import LoginRequest, APIResponse
from db.session import get_db
from utils.password import verify_password
from utils.token import generate_jwt_token

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post("/login", response_model=APIResponse)
async def login(user_data: LoginRequest, db: AsyncDatabase = Depends(get_db)):
    users_collection = db.get_collection("users")

    user = await users_collection.find_one({"username": user_data.username})
    if not user:
        logger.warning("ログイン失敗/存在しないユーザー: %s", user_data.username)
        raise HTTPException(status_code=401, detail="ユーザーネームかパスワードが間違っています")

    is_verified = verify_password(user_data.password, user["hashed_password"])
    if not is_verified:
        logger.warning("ログイン失敗/パスワードの不一致: %s", user_data.username)
        raise HTTPException(status_code=401, detail="ユーザーネームかパスワードが間違っています")

    user_id = str(user["_id"])

    access_token = generate_jwt_token(user_id)

    logger.info("ログイン成功: %s", user_data.username)
    return APIResponse(message="ログインに成功しました", access_token=access_token)
