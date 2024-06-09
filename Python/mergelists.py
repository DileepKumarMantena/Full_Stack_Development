def merge_lists(list1,list2):
    list3=list1+list2
    return sorted(list3)

list= int(input("Enter the number of elements: "))
list1 = [input(f"Enter list elements {i+1}: ") for i in range(list)]
print("The list of elements is:", list1)

list= int(input("Enter the number of elements: "))
list2 = [input(f"Enter list elements {i+1}: ") for i in range(list)]
print("The list of elements is:", list2)

result=merge_lists(list1,list2)
print("the sorted list is ",result)