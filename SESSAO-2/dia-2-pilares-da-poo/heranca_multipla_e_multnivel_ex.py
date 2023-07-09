class Animal:
    def __init__(self, nome:str) -> None:
        self.nome = nome

    def fazer_som(self) -> str:
        return f'{self.nome} fazendo som'
    
class Mamifero(Animal):
    def amamentar(self) ->str:
        return f'{self.nome} amamentou'

class Cachorro(Mamifero):
    def latir(self) -> str:
        return f'{self.nome} fez Au au!'

class MixinCorrer:
    def correr(self, velocidade):
        print(f"{self.nome} correndo a {velocidade} km/h")


class CachorroCorredor(Cachorro, MixinCorrer):
    pass