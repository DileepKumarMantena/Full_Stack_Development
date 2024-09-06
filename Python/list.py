# import csv


# with open('Sample1.csv', 'w', newline='') as csvfile:
#     csvwriter = csv.writer(csvfile)
#     csvwriter.writerow(['Name', 'Age', 'City'])
#     csvwriter.writerow(['Alice', '30', 'New York'])
#     csvwriter.writerow(['Bob', '25', 'Los Angeles'])

# # Reading from a CSV file
# with open('Sample1.csv', 'r') as csvfile:
#     csvreader = csv.reader(csvfile)
#     for row in csvreader:
#         print(row)


import json

data = {"name": "Alice", "age": 30, "city": "New York"}
with open('data.json', 'w') as json_file:
    json.dump(data, json_file)

# Reading from a JSON file
with open('data.json', 'r') as json_file:
    loaded_data = json.load(json_file)
    print(loaded_data)
