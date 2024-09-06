def find_all_substrings(s):
    substrings = []
    length = len(s)
    
    # Generating all substrings
    for i in range(length):
        for j in range(i + 1, length + 1):
            substrings.append(s[i:j])
    
    return substrings

# Example usage:
input_string = input("Enter a string: ")
result = find_all_substrings(input_string)
print("All substrings of the given string are:")
print(result)
