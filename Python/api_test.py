import requests

class CurrencyConverter:
    def __init__(self, api_key):
        self.api_key = api_key
        self.api_url = f"https://v6.exchangerate-api.com/v6/{self.api_key}/latest/USD"

    def get_exchange_rates(self):
        response = requests.get(self.api_url)
        return response.json()

    def convert(self, amount, from_currency, to_currency):
        rates = self.get_exchange_rates()
        from_rate = rates['conversion_rates'].get(from_currency)
        to_rate = rates['conversion_rates'].get(to_currency)

        if from_rate and to_rate:
            base_amount = amount / from_rate
            return base_amount * to_rate
        return None

# Replace 'YOUR_API_KEY' with your actual API key
api_key ="95a259e8b3f608ca1125fc6e"
converter = CurrencyConverter(api_key)

# Fetch exchange rates
exchange_rates = converter.get_exchange_rates()

# Convert 100 USD to EUR
amount = 100
from_currency = 'USD'
to_currency = 'EUR'
converted_amount = converter.convert(amount, from_currency, to_currency)
print(f"{amount} {from_currency} is {converted_amount} {to_currency}")
