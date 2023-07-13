class PostgresConnection:
    def execute(self, query: str) -> list[str]:
        return [
            f"Postgres executou a query `{query}`",
            "e retornou mais uma string adicional",
        ]


class PostgresDatabase:
    def connect(self, connection_url: str = "123") -> PostgresConnection:
        if connection_url == "123":
            raise ValueError("Invalid connection")
        return PostgresConnection()
