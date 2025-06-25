Çimport requests

def main():
    try:
        response = requests.get("https://api.github.com")
        print("Status Code:", response.status_code)
        print("Response:", response.json())
    except Exception as e:
        print("Ocurrió un error:", e)

if __name__ == "__main__":
    main()