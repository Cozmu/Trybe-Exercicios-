class Retangulo:
    def __init__(self, base:float, altura:float) -> None:
        self.base =base
        self.altura = altura
    
    def area(self) -> float:
        return self.base * self.altura
    
    def perimetro(self) -> float:
        return (self.base * 2) + (self.altura * 2)

retangulo = Retangulo(2, 5)
print(retangulo.area())
print(retangulo.perimetro())
