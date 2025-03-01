from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__)

# In-memory user storage (replace with DB later)
user_data = []


# Function to register a new user
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    password = data.get("password")
    age = data.get("age")

    # Basic validation
    if len(username) <= 3:
        return jsonify({"error": "Username must be more than 3 characters"}), 400
    if len(password) <= 8:
        return jsonify({"error": "Password must be more than 8 characters"}), 400
    if int(age) < 18:
        return jsonify({"error": "You must be at least 18 years old"}), 400

    # Check if username exists
    if any(user["username"] == username for user in user_data):
        return jsonify({"error": "Username already taken"}), 400

    # Add new user
    user_data.append({"username": username, "password": password, "age": int(age), "balance": 5000.00, "transaction_history": []})
    return jsonify({"message": "Registration successful!"}), 200


# Function to log in
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    for user in user_data:
        if user["username"] == username and user["password"] == password:
            return jsonify({"message": "Login successful!", "user": user}), 200

    return jsonify({"error": "Invalid username or password"}), 400


# Function to change password
@app.route("/change_password", methods=["POST"])
def change_password():
    data = request.json
    username = data.get("username")
    old_password = data.get("old_password")
    new_password = data.get("new_password")

    for user in user_data:
        if user["username"] == username and user["password"] == old_password:
            if len(new_password) <= 8:
                return jsonify({"error": "New password must be more than 8 characters"}), 400
            user["password"] = new_password
            return jsonify({"message": "Password changed successfully!"}), 200

    return jsonify({"error": "Incorrect username or password"}), 400


# Serve HTML pages
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register_page")
def register_page():
    return render_template("register.html")


@app.route("/login_page")
def login_page():
    return render_template("login.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


@app.route("/change_password_page")
def change_password_page():
    return render_template("change_password.html")


if __name__ == "__main__":
    app.run(debug=True)
