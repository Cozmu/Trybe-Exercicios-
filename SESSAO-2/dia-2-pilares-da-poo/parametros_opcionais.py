from dataclasses import dataclass

class Pessoa:
    def __init__(self, nome:str, idade=None, saldo_na_conta=None) -> None:
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)