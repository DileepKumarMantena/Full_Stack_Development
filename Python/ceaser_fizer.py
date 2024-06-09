def caesar_cipher(text, shift):
    encrypted = ""
    for char in text:
        if char.isalpha():
            shift_amount = 65 if char.isupper() else 97
            encrypted += chr((ord(char) - shift_amount + shift) % 26 + shift_amount)
        else:
            encrypted += char
    return encrypted

text = input("Enter the message: ")
shift = int(input("Enter the shift: "))
encrypted_message = caesar_cipher(text, shift)
print("Encrypted message:", encrypted_message)
