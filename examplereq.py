import requests

response = requests.get("http://localhost:8000/v1/ascii/shrek")

if response.status_code == 200:
    print(response.text)
else:
    print("Error: ", response.status_code)
