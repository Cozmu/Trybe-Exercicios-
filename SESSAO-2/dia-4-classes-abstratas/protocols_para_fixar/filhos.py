class Quadrado:
    def __init__(self, base, altura) -> None:
        self.base = base
        self.altura = altura

    def calcula_perimetro(self)-> int:
        return (self.base * 2) + (self.altura * 2)
