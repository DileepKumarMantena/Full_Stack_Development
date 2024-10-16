import pandas as pd

data = {'name': ['John', 'Sara', None], 'age': [28, None, 35]}
df = pd.DataFrame(data)

# Detect missing values
print(df.isna())  # or df.isnull()


