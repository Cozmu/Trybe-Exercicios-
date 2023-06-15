import collections # metodo que cria obj com a quantidade de vezes se repete

def score(subordinates, person):
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)

    return this_score

subordinates = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}

print(score(subordinates, 1))