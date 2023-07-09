class GastoMensal:
    def __init__(self, internet:float, supermercado:float, luz:float, agua:float, aluguel:float) -> None:
        self.internet = internet
        self.supermercado = supermercado
        self._luz = luz
        self._agua = agua
        self.__aluguel = aluguel

    @property.getter
    def luz(self) -> str:
        return f'conta de luz R${self._luz}'

    @property.getter
    def agua(self) -> str:
        return f'conta de agua R${self._agua}'
