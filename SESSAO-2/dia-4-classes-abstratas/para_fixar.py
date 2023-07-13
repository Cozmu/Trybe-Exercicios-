from abc import ABC, abstractmethod

class Pessoa(ABC):
    @abstractmethod
    def imprimir_cargo(self) -> str:
        pass

    
class Vendedor(Pessoa):
    def imprimir_cargo(self) -> str:
        return 'Meu cargo é vendedor'    
    
class Gerente(Pessoa):
    def imprimir_cargo(self) -> str:
        return 'Meu cargo é gerente'

# ------------------------

class Produto(ABC):
    @abstractmethod
    def imprimir_preco(self) -> str:
        raise NotImplementedError('deve imprimir o preço')


class Livro(Produto):
    def __init__(self, nome:str, preco:int) -> None:
        self.nome = nome
        self.preco = preco

    def imprimir_preco(self) -> str:
        return f'o livro {self.nome} vale R${self.preco}'