import bcrypt


def hash_password(password: str) -> str:
    encoded_password = password.encode()
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(encoded_password, salt)
    return hashed_password.decode()


def verify_password(plain: str, hashed: str) -> bool:
    encoded_plain = plain.encode()
    encoded_hashed = hashed.encode()
    return bcrypt.checkpw(encoded_plain, encoded_hashed)
