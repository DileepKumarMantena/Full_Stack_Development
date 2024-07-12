import pandas as pd
import os

# Define paths to your CSV and JSON files
main_csv_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_f_copy.csv'
main_json_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_l_copy.json'

# Verify that the files exist
if not os.path.exists(main_csv_path):
    raise FileNotFoundError(f"CSV file not found at path: {main_csv_path}")
if not os.path.exists(main_json_path):
    raise FileNotFoundError(f"JSON file not found at path: {main_json_path}")

# Read and clean the CSV file
def read_and_clean_csv(csv_path):
    df = pd.read_csv(csv_path, delimiter=',')
    df = df.dropna(subset=['YearOfCreation'])
    df = df[df['YearOfCreation'] != '']
    return df

# Read and clean the JSON file
def read_and_clean_json(json_path):
    df = pd.read_json(json_path)
    df = df.dropna(subset=['founded'])
    return df

# Merge the cleaned dataframes and return the result
def merge_dataframes(csv_df, json_df):
    merged_df = pd.merge(csv_df, json_df, how='inner', left_on='YearOfCreation', right_on='founded')
    return merged_df[['_id', 'company_id']]

# Save the result to a CSV file
def save_to_csv(df, output_path):
    df.to_csv(output_path, index=False)

# Main function to execute the process
def main():
    # Read and clean data
    csv_df = read_and_clean_csv(main_csv_path)
    json_df = read_and_clean_json(main_json_path)

    # Merge dataframes
    result_df = merge_dataframes(csv_df, json_df)

    # Define output path
    output_csv_path = r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\matching_results2.csv'

    # Save the result to a CSV file
    save_to_csv(result_df, output_csv_path)

    # Optionally, read back the CSV to verify
    output_df = pd.read_csv(output_csv_path)
    print(output_df.head())

# Execute the main function
if __name__ == "__main__":
    main()
