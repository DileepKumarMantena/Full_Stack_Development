import logging
import re

# Configure logging
logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO, filename='app.log')

# User input
age_name = input('Enter user age and name: ')

# Log the input
logging.info(f"User input: {age_name}")

# Use regular expression to separate digits (age) from the name
match = re.match(r'(\d+)([A-Za-z]+)', age_name)#1deepak
if match:
    print("asbadsb")
    age = int(match.group(1))  # Extract age (digits part)
    name = match.group(2)      # Extract name (letters part)

    print(f"Age: {age}")
    print(f"Name: {name}")

    try:
        if age > 18:
            print(f"{name} is older than 18.")
        else:
            print(f"{name} is 18 or younger.")
    except ZeroDivisionError:
        print("An error occurred.")
else:
    print("Invalid input format. Please enter age followed by a name.")
