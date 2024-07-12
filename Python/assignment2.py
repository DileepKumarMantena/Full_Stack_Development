import pandas as pd
import os

# Set relative paths if files are in the same directory as your notebook

main_csv_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_f_copy.csv'
main_json_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_l_copy.json'

# Check if files exist
if not os.path.exists(main_csv_path) or not os.path.exists(main_json_path):
    raise FileNotFoundError("Files not found. Check the file paths.")

# Read CSV and JSON files
main_csv_df = pd.read_csv(main_csv_path, delimiter=',')  # Adjust delimiter if needed
main_json_df = pd.read_json(main_json_path)

# Drop rows with empty values in CSV
main_csv_df.dropna(subset=['YearOfCreation'], inplace=True)
main_csv_df = main_csv_df[main_csv_df['YearOfCreation'] != '']

# Drop rows with null values in JSON
main_json_df.dropna(subset=['founded'], inplace=True)

# Merge CSV and JSON dataframes
merged_df = pd.merge(main_csv_df, main_json_df, how='inner', left_on='YearOfCreation', right_on='founded')

# Select columns of interest for the final result
result_df = merged_df[['_id', 'company_id']]

# Output to CSV
output_csv_path = 'matching_results1.csv'
result_df.to_csv(output_csv_path, index=False)

# Optionally, read back the CSV to verify
output_df = pd.read_csv(output_csv_path)
print(output_df.head())
