while True:
    try:
        x = int(input("Por favor digite um número inteiro: "))
        break
    except ValueError:
        # 'ValueError' é a exceção que ocorre quando a função int() recebe um
        # valor que não pode ser traduzido para número inteiro
        print("Oops! Esse não era um número inteiro. Tente novamente...")

try:
    with open("arquivo.txt", "r") as file:
        print(file.read())
    
except FileNotFoundError:
    # será executado caso haja a exceção 'FileNotFoundError'
    print("Arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    file.close()
    print("Arquivo manipulado e fechado com sucesso")
finally:
    # será sempre executado, independentemente de erro
    print("Fim da tentativa de ler o arquivo")