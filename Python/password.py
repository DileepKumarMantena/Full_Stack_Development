# Function to check if the password meets the criteria
def is_valid_password(password):
    # Check if password length is at least 8
    if len(password) < 8:
        return False
    
    # Initialize flags for special character and number
    has_special_char = False
    has_number = False
    
    # List of special characters
    special_characters = "!@#$%^&*()-_+=<>?/{}[]|\\:;\"',.~`"
    
    # Loop through each character in the password
    for char in password:
        if char.isdigit():
            has_number = True
        elif char in special_characters:
            has_special_char = True

    # Check if both conditions are satisfied
    return has_special_char and has_number

# Get password input
password = input("Enter your password: ")

# Validate password
if is_valid_password(password):
    print("Password is valid!")
else:
    print("Password is invalid! Ensure it is at least 8 characters long, contains at least one special character, and one number.")
