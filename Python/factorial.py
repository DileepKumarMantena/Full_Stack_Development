def factorial(n):
    if n==0:
        return 1
    else:
        return n * factorial(n-1)

number=int(input('enter a number:'))
result =factorial(number)
print('the factorial of the given number is ',result)