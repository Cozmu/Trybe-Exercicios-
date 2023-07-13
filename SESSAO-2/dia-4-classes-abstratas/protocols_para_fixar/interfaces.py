from typing import Protocol

class CalculaPerimetro(Protocol):
    def calcula_perimetro(self)-> str:
        """calcula o perimetro de alguma figura geometrica (soma todos os lados)"""
        ...