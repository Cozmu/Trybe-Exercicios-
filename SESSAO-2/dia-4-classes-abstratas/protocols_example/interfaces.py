from typing import Protocol


# Para criar um protocolo, basta criar uma classe que herda de Protocol
class Connection(Protocol):
    """Protocolo de conexão com o banco de dados"""

    # Definimos os métodos normalmente, com a devida assinatura
    def execute(self, query: str) -> list[str]:
        """Executa uma query no banco e retorna os dados, caso existam"""
        # O corpo do método não deve ter nada, portanto é comum utilizar
        # ellipsis (os 3 pontos abaixo) do Python, ou a palavra reservada pass
        ...


class Database(Protocol):
    """Protocolo de um banco de dados"""

    def connect(self, connection_url: str) -> Connection:
        """Realiza uma conexão com o banco de dados"""
        ...
