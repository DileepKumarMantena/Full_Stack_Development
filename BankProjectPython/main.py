import json

# Initial JSON data for user details
user_data = []

# Function to load user details from the JSON data


def load_user_data():
    return user_data  # Return the in-memory user data

# Function to save user details to the JSON data


def save_user_data(new_user):
    global user_data
    user_data.append(new_user)

# Function to register a new user


def register(details):
    print("Registering user with details:", details)
    # Validate password length
    if len(details['password']) <= 8:
        print("Password must be more than 8 characters.")
        return False
    # Validate username length
    if len(details['username']) <= 3:
        print("Username must be greater than 3 characters.")
        return False
    # Validate age
    if details['age'] < 18:
        print("You are still underage.")
        return False

    # Check if username already exists
    all_users = load_user_data()
    if any(user['username'] == details['username'] for user in all_users):
        print("Username already exists. Please try a different one.")
        return False

    # Append details to user data
    save_user_data(details)
    return True

# Function to log in


def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Check credentials
    for user in load_user_data():
        if user['username'] == username and user['password'] == password:
            print(f"Welcome {username}! Login successful.")
            return user  # Return the logged-in user's details

    print("Username or password is incorrect.")
    return None  # Return None if login fails

# Function to change the password


def change_password():
    username = input("Enter your username: ")
    old_password = input("Enter your old password: ")

    # Find user in user data
    for user in load_user_data():
        if user['username'] == username and user['password'] == old_password:
            new_password = input("Enter your new password: ")
            if len(new_password) <= 8:
                print("Password must be more than 8 characters.")
                return False
            user['password'] = new_password
            print("Password changed successfully!")
            return True

    print("Incorrect username or password.")
    return False

# Dashboard function


def dashboard(user_data):
    print("\n=== Dashboard ===")
    print(f"Welcome, {user_data['username']}!")
    print(f"Your current balance is: ${user_data.get('balance', 5000.00):.2f}")

    print("\nTransaction History:")
    transaction_history = user_data.get('transaction_history', [
        {"type": "Deposit", "amount": 2000.00, "date": "2024-12-15"},
        {"type": "Withdrawal", "amount": 500.00, "date": "2024-12-20"},
        {"type": "Transfer", "amount": 1500.00,
            "date": "2025-01-01", "to": "Alice"}
    ])
    for transaction in transaction_history:
        if transaction["type"] == "Transfer":
            print(
                f"{transaction['date']}: {transaction['type']} of ${transaction['amount']:.2f} to {transaction['to']}")
        else:
            print(
                f"{transaction['date']}: {transaction['type']} of ${transaction['amount']:.2f}")

# Main function


def main():
    logged_in_user = None  # Keep track of the logged-in user

    while True:
        print("\nMenu:")
        print("1. Register")
        print("2. Login")
        print("3. Change Password")
        print("4. Dashboard")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            # Registration
            details = {
                'username': input("Please enter your username: "),
                'password': input("Please enter your password: "),
                'age': int(input("Please enter your age: "))
            }
            if register(details):
                print("Registration successful!")
        elif choice == "2":
            # Login
            user = login()
            if user:
                logged_in_user = user
        elif choice == "3":
            # Change Password
            if change_password():
                print("Password updated successfully!")
            else:
                print("Password update failed!")
        elif choice == "4":
            # Dashboard
            if logged_in_user:
                dashboard(logged_in_user)
            else:
                print("Please log in first to access the dashboard.")
        elif choice == "5":
            # Exit
            print("Thank you! Please visit again.")
            break
        else:
            print("Invalid choice, please try again.")


# Run the main function
main()
