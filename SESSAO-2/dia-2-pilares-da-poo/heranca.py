from typing import Any


class Eletrodoméstico:
    def __init__(
        self,
        cor: str,
        potência: int,
        tensão: int,
        preço: float | int
    ) -> None:
        self.cor = cor
        self.preço = preço
        self.potência = potência
        self.tensão = tensão
        self.velocidade_máxima = 3

        # Inicia os valores de `corrente_atual_no_motor`, `velocidade` e
        # `ligado` chamando o método `desligar` direto no construtor
        self.desligar()

    def ligar(self, velocidade: int) -> None:
        if velocidade > self.velocidade_máxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.velocidade_máxima}"
            )

        self.velocidade = velocidade
        self.ligado = True

        corrente_máxima = self.potência / self.tensão
        velocidade_percentual = velocidade / self.velocidade_máxima
        self.corrente_atual_no_motor = corrente_máxima * velocidade_percentual

    def desligar(self) -> None:
        self.ligado = False
        self.velocidade = 0
        self.corrente_atual_no_motor = 0


class Liquidificador(Eletrodoméstico):
    pass


class Pessoa:
    def __init__(self, nome: str, saldo_na_conta: float) -> None:
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador: Liquidificador | None = None

    def comprar_liquidificador(self, liquidificador: Liquidificador) -> None:
        if liquidificador.preço <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preço
            self.liquidificador = liquidificador

liquidificador_vermelho = Liquidificador()
pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

class Pai:
    def faz_algo(self, valor: Any) -> None:
        print(valor)


class Filha(Pai):
    def faz_outra_coisa(faz_algo) -> None:
        print("Método da classe Pai")

        # Chama o método da superclasse `Pai` passando o `self`
        # explicitamente
        # Pai.faz_algo(self, valor=1)
        super().faz_algo(valor=1)


sub_objeto = Filha()
sub_objeto.faz_outra_coisa()
# Método da classe Pai
# 1