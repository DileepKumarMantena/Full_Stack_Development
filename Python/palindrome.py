def rev_string(s):
    return s[::-1]

original_string=input('enter a string:').lower()
revers_string=rev_string(original_string)
print(revers_string)
if revers_string==original_string:
    print('The String is a palindrome',original_string)
else :
    print('The string is not a palindrome',original_string)
