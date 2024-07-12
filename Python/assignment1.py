import pandas as pd

# Paths to your CSV and JSON files
main_csv_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_f_copy.csv'
main_json_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_l_copy.json'

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
result_df.to_csv('matching_results.csv', index=False)

# Optionally, read back the CSV to verify
output_df = pd.read_csv('matching_results.csv')
print(output_df.head())
