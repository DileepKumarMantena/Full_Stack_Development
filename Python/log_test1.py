import logging

# Configure logging
logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO, filename='app.log')

# User input
age_name = input('Enter user age and name: ')

# Log the input
logging.info(f"User input: {age_name}")

# Separate digits (age) from the letters (name)
age_str = ""
name = ""

for char in age_name:#1deepak
    if char.isdigit():
        age_str += char  # Collecting all digits as age
    else:
        name += char     # Collecting all non-digits as name

# Convert the age part to an integer, and handle the case if no digits are found
if age_str:
    age = int(age_str)
    logging.info(f"Age: {age}")
    logging.info(f"Name: {name}")

    try:
        if age > 18:
            logging.info(f"{name} is older than 18.")
        else:
            logging.info(f"{name} is 18 or younger.")
    except ZeroDivisionError:
        logging.error("An error occurred.")
else:
    logging.error("No valid age found in the input.")
