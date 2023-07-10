from dataclasses import dataclass

@dataclass
class Pessoa:
        idade:str
        nome:str
        saldo_na_conta:int
        brinquedos:list
    

pessoa_1 = Pessoa("Marcelo", 22, 700, [1, 2, 3])
