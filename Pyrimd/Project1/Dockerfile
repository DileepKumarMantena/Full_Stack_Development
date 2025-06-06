# Base image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 6543

# Run the app using waitress
CMD ["waitress-serve", "--host=0.0.0.0", "--port=6543", "app:main"]
