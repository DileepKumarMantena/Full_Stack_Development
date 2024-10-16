import csv

def read_csv_and_calculate(input_file, output_file):
    total_salary = 0
    max_salary = float('-inf')
    min_salary = float('inf')

    # Reading the input CSV file
    with open(input_file, mode='r') as file:
        csv_reader = csv.reader(file)
        header = next(csv_reader)  # Skip the header if present (Name, Salary)
        
        for row in csv_reader:
            name = row[0]
            salary = float(row[1])  # Converting salary to a float for calculation
            
            # Calculating sum, max, and min salary
            total_salary += salary
            max_salary = max(max_salary, salary)
            min_salary = min(min_salary, salary)

    # Writing the results into the output CSV file
    with open(output_file, mode='w', newline='') as file:
        csv_writer = csv.writer(file)
        
        # Writing the results
        csv_writer.writerow(['Total Salary', 'Max Salary', 'Min Salary'])
        csv_writer.writerow([total_salary, max_salary, min_salary])

# Corrected input file path for WSL
# input_file = "/home/dileep/dileep/personal/Python/input.csv" 
input_file="C:/Users/user/Downloads/Projects/Mine/Full_Stack_Development/Python/input.csv" 
# output_file = "/home/dileep/dileep/personal/Python/salary_summary.csv"
output_file="C:/Users/user/Downloads/Projects/Mine/Full_Stack_Development/Python/salary_summary.csv" 


# Call the function to read and write data
read_csv_and_calculate(input_file, output_file)
