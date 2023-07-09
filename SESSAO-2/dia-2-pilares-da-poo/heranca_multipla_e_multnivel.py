class C: # C
    def x(self): # método de exemplo
        print(1)

class B(C): # B herda de C
    pass

class A(B): # A herda de B
    pass


a = A()
a.x()
# 1

class A(B, C): #
    pass

class Animal:
    def __init__(self, name: str) -> None:
        self.name = name


class MixinVoar:
    def voar(self):
        print("Pássaro voando...")


class Passaro(Animal, MixinVoar):
    def __init__(self, name: str) -> None:
        super().__init__(name)


passaro = Passaro("Pardal")
passaro.voar() # Pássaro voando...
