user_input = input("Me dê números separados por espaço: ")

def soma(numeros):
    somatorio_total = 0  
    arr = numeros.split(' ')
    for numero in arr:
        if not numero.isdigit():
            return f'Erro ao somar valores, {numero} é um valor inválido'
        somatorio_total += int(numero)
    return somatorio_total  

print(soma(user_input)) 


a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3) # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]