class Liquidificador:
    def __init__(
        self,
        cor: str,
        potência: int,
        tensão: int,
        preço: float | int
    ) -> None:
        # Adiciona o valor do parâmetro `cor` a um atributo de mesmo nome (homônimo)
        # do objeto que está sendo criado (`self.cor`).
        self.cor = cor
        self.preço = preço
        self.potência = potência
        self.tensão = tensão

        # Valores _hard coded_
        self.ligado = False
        self.velocidade = 0
        self.velocidade_máxima = 3
        self.corrente_atual_no_motor = 0

# Agora, podemos criar nossos primeiros liquidificadores.
# Os argumentos nos parênteses são passados para o `__init__`
meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(
    cor="Vermelho", potência=250, tensão=220, preço=100
)


class Motocicleta:
    def __init__(self, velocidade_max: int) -> None:
        self.velocidade_max = velocidade_max


class Caminhao:
    def __init__(self, velocidade_max: int) -> None:
        self.velocidade_max = velocidade_max

caminhao = Caminhao(200)
motocicleta = Motocicleta(190)

def print_velocidade_max(veiculo) -> int | str:
    if isinstance(veiculo, Motocicleta):
        print(f"A velocidade máxima do veículo é de {veiculo.velocidade_maxima}")
    else:
        raise TypeError("O objeto precisa ser uma motocicleta")


print_velocidade_max(caminhao)