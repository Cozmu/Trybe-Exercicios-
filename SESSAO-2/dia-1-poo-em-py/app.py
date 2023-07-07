def add_two_numbers(num1: int, num2: int): # mypy app.py 
    return num1 + num2

print(add_two_numbers(1, 2.0))

# tipo int é inferido sem que eu precise deixar explícito
var1 = 1

# não faça isso, é verboso e desnecessário
var2: int = 1

# importante deixar explícito que começa como int, mas pode mudar para float
var3: int | float = 1

def add_two_numbers(num1: int, num2: int) -> int:
    return num1 + num2

class Pessoa:
    def __init__(self, nome: str, idade: int, altura: float) -> None:
        self.nome = nome
        self.idade = idade
        self.altura = altura

class DataBase:
    def __init__(
        self, 
        dialect: str, 
        user: str, 
        host: str, 
        password: str, 
        database: str, 
        port: str | int = ''
        ) -> None:
        if not port:
            if dialect == "mysql":
                port = 3306
            elif dialect == "postgres":
                port = 5432
            else:
                raise ValueError(
                    "invalid default `port` for unrecognized `dialect`"
                )
        if type(port) == str and not port.isnumeric():
            raise ValueError("`port` must have a numeric value")


        self.dialect = dialect,
        self.user = user,
        self.host = host,
        self.password = password,
        self.database = database,
        self.port = port,
        self.connection_url = (
            f"{dialect}://{user}:{password}@{host}:{port}/{database}"
        )

data1 = DataBase()
data2 = DataBase()

class Pessoa:
    def diz_nome_e_idade(self, idade: int) -> None:
        print(f"{self.nome} tem {idade} anos.")

maria = Pessoa()
maria.nome = "Maria"
maria.diz_nome_e_idade(20) # saída: Maria tem 20 anos.

jorge = Pessoa()
jorge.nome = "Jorge"
jorge.diz_nome_e_idade(28) # saída: Jorge tem 28 anos.


class Carro:
    def identificar(self):
       return f'Meu carro é um {self.modelo}, da {self.marca}. Ele é do {self.ano} e tem a cor {self.cor}'

carro1 = Carro()
carro1.marca = 'a'
carro1.modelo = 'x'
carro1.ano = '2001'
carro1.cor = 'rosa'

print(carro1.identificar())
