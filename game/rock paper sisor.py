##sublime texte ne supporte pas les input so copier coller ds python 3.8
from random import randint

print("This is a game of rock paper scissor \nIt is a best out 5")

def _player_(pr):
    pr = input("1=rock \n2=paper   \n3=scissor \nfait ton choix : ")
    if (pr=='1'):
        return 'rock'
    elif (pr=='2'):
        return 'paper'
    elif (pr=='3'):
        return 'scissor'
    elif (pr>"3") :
        print ('Enter a number between 1 and 3')
        return _player_(0)



def _bot_ (br):
    br = randint(1, 3)
    
    if (br==1):
        return 'rock'
    elif (br==2):
        return 'paper'
    elif (br==3):
        return 'scissor'
       

def _result_(winner):
    point_b=0
    point_p=0
    while (point_p!=3 or point_b!=3):
        p=(_player_(0))
        b=(_bot_(0))
        print("The bot choose : ", b)
        if (p==b):
            print ('Its  a tie!!!')
        elif (p=='scissor' and b=='paper'):
            point_p=point_p+1
            print('You win this round!!')
            print('You have ', point_p, " points *** The bot as *",point_b, '* points')
        elif (p=='paper' and b=='rock'):
            point_p=point_p+1
            print('You win this round!!')
            print('You have ', point_p, " points *** The bot as *",point_b, '* points')
        elif (p=='rock' and b=='scissor'):
            point_p=point_p+1
            print('You win this round!!')
            print('You have ', point_p, " points *** The bot as *",point_b, '* points')
        elif (p=='paper' and b=='scissor' or p=='rock' and b=='paper' or p=='scissor' and b=='rock'):
            point_b=point_b+1
            print ('You lose this round!!!')
            print('You have ', point_p, " points *** The bot as *",point_b, '* points')
        if (point_b==3):
            return 'You lose this match'
        elif (point_p==3) :
            return 'You win this match'


print(_result_(0))  
    




