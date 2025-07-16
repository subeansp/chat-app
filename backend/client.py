import httpx

user = {
    "username": "subeansp",
    "password": "asdfghjkl"
}

res = httpx.post("http://localhost:8000/api/signup", json=user)

print(res.status_code)
print(res.json())
