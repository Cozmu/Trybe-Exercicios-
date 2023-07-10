from dataclasses import dataclass

class Produto:
    def __init__(self, nome:str, preco:float) -> None:
        self.nome = nome
        self._preco = preco  
    
    def descrever(self) -> str:
        return f'descrição do produto {self.nome}'
    
    def preco(self) -> str:
        return f'R${self._preco}'
    

class Livro(Produto):
    def __init__(self, nome: str, preco: float, autor:str) -> None:
        super().__init__(nome, preco)
        self.autor = autor
    
    def descrever(self) -> str:
        descricao = super().descrever()
        return f'{descricao} que tem como autor {self.autor}'

    def preco(self) -> str:
        preco = super().preco()
        return f'O livro custa {preco}'

class DVD(Produto):
    def __init__(self, nome: str, preco: float, diretor:str) -> None:
        super().__init__(nome, preco)
        self.diretor = diretor

    def descrever(self) -> str:
        descricao = super().descrever()
        return f'{descricao} que tem como diretor {self.diretor}'

    def preco(self) -> str:
        preco = super().preco()
        return f'O DVD custa {preco}'
    
livro = Livro("O Senhor dos Anéis", 29.99, "J.R.R. Tolkien")
dvd = DVD("O Poderoso Chefão", 19.99, "Francis Ford Coppola")

print(livro.descrever())
print(dvd.descrever())