import math
def prime (n):
    if n <=1:
        return False 
    for i in range(2, int(math.sqrt(n)) + 1):
        if n%i==0:
            return False
    return True

result= int(input('enter the number :'))
if prime(result)==True:
    print('The number is a prime number',result)
else :
    print('the number is not a prime number ',result)

        