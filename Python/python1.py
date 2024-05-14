import requests

def get_weather_by_location(state, country):
    api_key = "db94dcb1d71acbecb74c1b2e8ba33d2e"
    # url = f"https://api.openweathermap.org/data/2.5/weather?q={state},{country}&APPID={api_key}"
    url = f"https://api.openweathermap.org/data/2.5/weather?q=Austin,Usa&APPID=db94dcb1d71acbecb74c1b2e8ba33d2e"

    response = requests.get(url)
    if response.status_code == 200:
        weather_data = response.json()
        print(f"Weather in {state}, {country}:")
        print("Description:", weather_data['weather'][0]['description'])
        print("Temperature:", weather_data['main']['temp'], "°C")
        print("Humidity:", weather_data['main']['humidity'], "%")
    else:
        print("Failed to fetch weather data.")

# Accept user input for state and country
state = input("Enter state: ")
country = input("Enter country: ")

# Call the function with user-provided state and country
get_weather_by_location(state, country)
