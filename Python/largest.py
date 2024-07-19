def find_largest(num1, num2, num3):
    return max(num1, num2, num3)

print("Largest number:", find_largest(*map(int, input("Enter three numbers separated by space: ").split())))