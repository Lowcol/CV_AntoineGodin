import random
print("welcome to this Hangman game")
# word = input("Choose a word: ") #If you want to choose a word


WORDS= ("variable", "python", "turtle", "string", "loop")
word= random.choice(WORDS)#chooses randomly from the choice of words

print("The word is ", len(word), " letters long")
ln = len(word)
guessed = dict.fromkeys(word, 0)
print("_ "*ln)
correct = 0
for i in range(0, 9):#gives the amount of guesses allocated
    letter = input("Guess a letter ")

    if letter in word:
        print ("Correct! {} is in the word".format(letter))#if guesses letter is correct print correct
        guessed[letter] = 1
        correct += 1
        if correct == ln:
            print("Congratulations! you win.\n The word was {}".format(word))
            break
    else:
        print ("Incorrect! {} is not in the word".format(letter))
        #if its wrong print incorecct
    print(" ".join([ch if guessed[ch] else "_" for ch in word]))
else:
    print("You lose!\nThe word was {}".format(word))