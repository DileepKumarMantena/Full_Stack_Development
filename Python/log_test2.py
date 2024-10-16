import logging

# Configure logging
logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO, filename='app.log')

# User input
age_name = input('Enter user age and name: ')

# Log the input
logging.info(f"User input: {age_name}")

# Extract age and name 1deeapak
age_str = ''.join([char for char in age_name if char.isdigit()])
print(age_str)
name = ''.join([char for char in age_name if not char.isdigit()])
print(name)

# Convert age string to integer
age = int(age_str) if age_str else 0

logging.info(f"Age: {age}")
logging.info(f"Name: {name}")

# Check age
if age > 18:
    logging.info(f"{name} is older than 18.")
else:
    logging.info(f"{name} is 18 or younger.")
