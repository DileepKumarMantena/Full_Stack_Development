# import pandas as pd

# csv_file_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\Sample.csv'
# csv_df = pd.read_csv(csv_file_path)
# # print(csv_df)

# json_file_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\Sample.json'
# json_df = pd.read_json(json_file_path)
# # print(json_df)

# merged_df = pd.merge(csv_df, json_df, how='inner', left_on=['name', 'year'], right_on=['name', 'year'])
# result_df = merged_df[['id', 'company_id', 'name', 'year']]
# result_df.to_csv('matching_records.csv', index=False)

# output_file_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\matching_records.csv'
# output_df = pd.read_csv(output_file_path)
# print(output_df)


# import pandas as pd
# main_csv_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\Main.csv'
# main_csv_df = pd.read_csv(main_csv_path, delimiter='\t')
# # print(main_csv_df)

# main_json_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\Main.json'
# main_json_df=pd.read_json(main_json_path)
# # print(main_json_df)


# merged_df = pd.merge(main_csv_df, main_json_df, how='inner', left_on=['YearOfCreation'], right_on=['founded'])
# result_df = merged_df[['_id', 'company_id']]
# result_df.to_csv('matching_results.csv', index=False)
# output_file_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\matching_results.csv'
# output_df = pd.read_csv(output_file_path)
# print(output_df)


import pandas as pd
main_csv_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_f_copy.csv'
main_csv_df = pd.read_csv(main_csv_path, delimiter='\t')
# print(main_csv_df)

main_json_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_l_copy.json'
main_json_df=pd.read_json(main_json_path)
# print(main_json_df)


merged_df = pd.merge(main_csv_df, main_json_df, how='inner', left_on=['YearOfCreation'], right_on=['founded'])
print('/////')
# print("jaai",merged_df)
result_df = merged_df[['_id', 'company_id']]
result_df.to_csv('matching_results_1.csv', index=False)
output_file_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\matching_results_1.csv'
output_df = pd.read_csv(output_file_path)
print(output_df)



