from fastapi import FastAPI, Request
from pymongo import AsyncMongoClient
from pymongo.asynchronous.database import AsyncDatabase
from contextlib import asynccontextmanager
from dotenv import load_dotenv
import os
import logging

logger = logging.getLogger(__name__)

load_dotenv()

DB_URI = os.getenv("DB_URI")
DB_NAME = os.getenv("DB_NAME")


@asynccontextmanager
async def lifespan(app: FastAPI):
    client = None
    try:
        client = AsyncMongoClient(DB_URI)
        db = client.get_database(DB_NAME)
        app.state.db = db
        logger.info("MongoDB 接続完了")
        yield
    except Exception as e:
        logger.error("MongoDB 接続エラー", exc_info=True)
        raise
    finally:
        if client:
            await client.close()
            logger.info("MongoDB 切断完了")


def get_db(request: Request) -> AsyncDatabase:
    return request.app.state.db
