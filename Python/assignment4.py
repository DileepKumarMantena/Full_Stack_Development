import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import os

# Define paths to your CSV and JSON files
main_csv_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_f_copy.csv'
main_json_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_l_copy.json'

# Verify that the files exist
if not os.path.exists(main_csv_path):
    raise FileNotFoundError(f"CSV file not found at path: {main_csv_path}")
if not os.path.exists(main_json_path):
    raise FileNotFoundError(f"JSON file not found at path: {main_json_path}")

# Read the CSV file and clean it
csv_df = (
    pd.read_csv(main_csv_path, delimiter=',')
    .dropna(subset=['YearOfCreation'])
    .loc[lambda df: df['YearOfCreation'] != '']
)

# Read the JSON file and clean it
json_df = (
    pd.read_json(main_json_path)
    .dropna(subset=['founded'])
)

# Merge the dataframes on the specified columns
merged_df = csv_df.merge(json_df, how='inner', left_on='YearOfCreation', right_on='founded')

# Select the desired columns and save to CSV
output_csv_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\matching_results1.csv'
merged_df[['_id', 'company_id']].to_csv(output_csv_path, index=False)

# Optionally, read back the CSV to verify
output_df = pd.read_csv(output_csv_path)
print(output_df.head())

# Convert matched _id and company_id to NumPy arrays
matched_ids = merged_df['_id'].values
matched_company_ids = merged_df['company_id'].values

# Create a plot for the matched _id and company_id using NumPy arrays
plt.figure(figsize=(10, 6))
plt.scatter(matched_ids, matched_company_ids, c='blue', marker='o')
plt.title('Matched _id and company_id')
plt.xlabel('_id (from CSV)')
plt.ylabel('company_id (from JSON)')
plt.xticks(rotation=90)  # Rotate x-axis labels for better readability
plt.tight_layout()
plt.show()
