# class Exemplo:
#     def __init__(self):
#         print("Inicializando Exemplo")
#         self.__privado = "Eu sou privado"

#     def __new__(cls, *args, **kwargs):
#         print("Criando uma nova instância de Exemplo")
#         instance = super().__new__(cls)
#         return instance

#     def __metodo_privado(self):
#         print("Este é um método privado")

#     def metodo_publico(self):
#         print("Este é um método público")
#         self.__metodo_privado()

class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor

class Liquidificador(Eletrodomestico):
	def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
		super().__init__(cor, potencia, tensao, preco)
		self.quantidade_de_portas = quantidade_de_portas

class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


class MaquinaDeLavar(Eletrodomestico):
    pass


secador = Secador("Branco", "450", "127", "400")
batedeira = Batedeira("Prata", "200", "127", "290")
maquina_de_lavar = MaquinaDeLavar("Preta", "6000", "127", "1300")
meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(
    cor="Vermelho", potencia=250, tensao=220, preco=100
)

# o uso de dois sublinhados __ (chamado de "name mangling") é uma convenção para criar
# atributos/métodos privados de forma mais rigorosa. Eles são automaticamente "renomeados"
# pelo interpretador Python, adicionando um nome de classe como prefixo para evitar colisões
# de nomes entre classes. 

# a convenção geralmente seguida é usar um único sublinhado _ para indicar que um atributo ou 
# método é destinado a ser de uso interno dentro da classe, mas ainda é acessível de fora da classe.
# Isso é conhecido como "convenção de privacidade fraca".

# não usar nenhum sublinhado indica que o atributo/método é público e pode ser acessado e modificado 
# livremente de fora da classe. FONTE: CHATGPT

# class Exemplo:
#     def __init__(self):
#         print("Inicializando Exemplo")
#         self.__privado = "Eu sou privado"

#     def __new__(cls, *args, **kwargs):
#         print("Criando uma nova instância de Exemplo")
#         instance = super().__new__(cls)
#         return instance

#     def __metodo_privado(self):
#         print("Este é um método privado")

#     def metodo_publico(self):
#         print("Este é um método público")
#         self.__metodo_privado()

class Liquidificador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia   
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"


meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(
    cor="Vermelho", potencia=250, tensao=220, preco=100
)

# o uso de dois sublinhados __ (chamado de "name mangling") é uma convenção para criar
# atributos/métodos privados de forma mais rigorosa. Eles são automaticamente "renomeados"
# pelo interpretador Python, adicionando um nome de classe como prefixo para evitar colisões
# de nomes entre classes. 

# a convenção geralmente seguida é usar um único sublinhado _ para indicar que um atributo ou 
# método é destinado a ser de uso interno dentro da classe, mas ainda é acessível de fora da classe.
# Isso é conhecido como "convenção de privacidade fraca".

# não usar nenhum sublinhado indica que o atributo/método é público e pode ser acessado e modificado 
# livremente de fora da classe. FONTE: chatgpt

class Ventilador:
  def __init__(self, preco):
      	self.preco = preco


meu_ventilador = Ventilador(200)

class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []
        self.liquidificador = None
        self.ventilador = None  # Adicionado o atributo ventilador

    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self):
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."
    
    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(meu_liquidificador)
pessoa_cozinheira.comprar_ventilador(meu_ventilador)
print(pessoa_cozinheira)
