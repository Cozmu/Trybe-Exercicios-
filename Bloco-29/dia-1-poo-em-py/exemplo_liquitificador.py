class Liquidificador:
    def get_cor(self):
        return self.__cor.upper()

    def set_cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor
        self.set_cor(cor)

        # Demais variáveis omitidas para este exemplo


liquidificador = Liquidificador("Azul", "110", "127", "200")

print(f"A cor atual é {liquidificador.get_cor()}")
liquidificador.set_cor("Preto")
print(f"Após pintarmos, a nova cor é {liquidificador.get_cor()}")


# SE USARMOS @property e @propriedade.setter ELE JA INTERPRETA COMO SETRS E GETRS

class Liquidificador2:
    # Getter
    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter # Repare que é @cor.setter, e não @property.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        # Observe que usamos o setter para já validarmos o primeiro valor:
        # usamos self.cor, que chama o setter, e não self.__cor que manipula
        # o atributo diretamente
        self.cor = cor

        # Demais variáveis omitidas para este exemplo


liquidificador2 = Liquidificador2("Rosa", "110", "127", "200")

print(liquidificador2.cor) # ROSA
liquidificador2.cor = "Vermelho"
print(liquidificador2.cor) # VERMELHO

