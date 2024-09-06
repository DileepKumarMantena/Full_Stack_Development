def print_right_angled_triangle(rows):
    for i in range(1, rows + 1):
        print('*' * i)

# Example usage:
rows = int(input("Enter the number of rows for the right-angled triangle: "))
print_right_angled_triangle(rows)
