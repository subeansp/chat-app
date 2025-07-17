import httpx

user = {
    "username": "subeansp",
    "password": "asdfghjkl"
}

res = httpx.post("http://localhost:8000/api/login", json=user)

print(res.status_code)
print(res.json())
