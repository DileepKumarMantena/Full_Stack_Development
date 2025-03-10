
#If you are given a list, reverse it without using the built-in .reverse() method.
old_list = [1, 2, 3, 4, 5]
new_list=[]

for i in range(len(old_list)):
    pope_value=old_list.pop()
    new_list.append(pope_value)
print(new_list)
       

