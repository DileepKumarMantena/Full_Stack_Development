# import pandas as pd

# # Creating a sample DataFrame

# df = {
#     'Yr': [2012,2013,2014,2015,2016,2017],
#     'Salary': [50000, 60000,80000,90000,50000,80000]
# }

# datafrme1 = pd.DataFrame(df)




# salary_df=df['Salary']
# print(salary_df)

# print(sum(salary_df))
# print(min(salary_df))
# print(max(salary_df))


import pandas as pd
main_json_path=r'C:\Users\user\Downloads\Projects\Mine\Full_Stack_Development\Python\source_l_copy.json'
main_json_df=pd.read_json(main_json_path)
print(main_json_df)

