file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.
file.write("Maria 45\n")
file.write("Miguel 33\n")
print("Túlio 22", file=file)
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)
file.close()

# escrita
with open("arquivo.txt", "w") as file_one:
    file_one.write("Trybe S2")

# leitura
with open("arquivo.txt", "r") as file_two:
    content = file_two.read()
    print(content)

# escrita
with open("arquivo.txt", "w") as arquivo:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    arquivo.writelines(LINES)

# leitura
with open("arquivo.txt", "r") as arquivo_one:
    for line in arquivo_one:
        print(line) # usando laço de repetição