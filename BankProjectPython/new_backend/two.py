#Given a sentence, reverse the word order while maintaining the characters' order in each word. 
# Example input: sentence = "Python is awesome"

sentence = "Python is awesome"
new=sentence.split(" ")
new_sentence1=new[2]
new_sentence2=new[1]
new_sentence3=new[0]

print(new_sentence1+" "+new_sentence2+" "+new_sentence3)