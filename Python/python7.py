import requests
import json

# Make sure to replace this URL with the actual endpoint
url = "https://coderbyte.com/api/challenges/json/age-counting"

# Perform GET request
response = requests.get(url)

# Check if request was successful (status code 200)
if response.status_code == 200:
    # Extract JSON data from response
    data = response.json()

    # Extract the value associated with the 'data' key
    data_string = data['data']

    # Split the data string into individual items
    items = data_string.split(", ")

    # Initialize count for items with age >= 50
    count = 0

    # Iterate through each item and check age
    for item in items:
        # Split each item into key-value pairs
        key_value = item.split("=")
        if key_value[0] == 'age' and int(key_value[1]) >= 50:
            count += 1

    # Print the final count
    print(count)

else:
    print("Failed to retrieve data:", response.status_code)
