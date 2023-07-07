def sum_list(lista: list) -> int: 
    result: int = 0 
    for num in lista:
        result += num
    return result

valores = [1, 2, 3, 4, 5]


def primeira_letra(lista: list[str], letra: str) -> list[str]:
    resultado: list[str] = []
    for palavra in lista:
        if palavra[0].lower() == letra.lower():
            resultado.append(palavra)
    return resultado


class livro:
    def __init__(self, titulo: str, autor: str, numero_de_pag: int) -> None:
        self.titulo = titulo
        self.autor = autor
        self.numero_de_pag = numero_de_pag

    def descricao(self) -> str:
        return f'descrição do livro{self.titulo} do autor {self.autor} que tem {self.numero_de_pag} paginas'

class carro:
    def __init__(self, modelo:str, ano:int) -> None:
        self.modelo = modelo
        self.ano = ano
        self.velocidade = 0
    
    def acelerar(self, new_velocidade: int) -> None:
        self.velocidade += new_velocidade
        print(f'O carro do modelo {self.modelo} do ano {self.ano} esta a {self.velocidade}km/h')

    def desacelerar(self, new_velocidade: int) -> None:
        self.velocidade -= new_velocidade
        print(f'O carro do modelo {self.modelo} do ano {self.ano} esta a {self.velocidade}km/h')