def sort_array(arr):
    return sorted(arr)

# Get input from the user
user_input = input("Enter a list of numbers separated by spaces: ")

# Convert the input string to a list of integers
arr = [int(x) for x in user_input.split()]

# Call the sort_array function
sorted_arr = sort_array(arr)

print("Sorted array:", sorted_arr)