def generate_possible_words(word1, word2):
    possible_words = set()  # To avoid duplicate words
    len1, len2 = len(word1), len(word2)

    # Generating words by concatenating substrings of word1 and word2
    for i in range(1, len1 + 1):
        for j in range(1, len2 + 1):
            new_word = word1[:i] + word2[:j]
            possible_words.add(new_word)
            if len(possible_words) >= 5:  # Stop after 5 unique combinations
                return list(possible_words)
    return list(possible_words)

# Example usage:
word1 = input("Enter the first word: ")
word2 = input("Enter the second word: ")
result = generate_possible_words(word1, word2)
print("5 possible words from the input words are:")
print(result)
