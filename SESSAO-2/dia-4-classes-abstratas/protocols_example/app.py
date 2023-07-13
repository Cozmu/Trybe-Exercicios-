from .databases.mysql import MySQLDatabase  # Observe os imports relativos
from .databases.postgresql import PostgresDatabase
from .interfaces import Connection, Database


# Função que recebe um Database qualquer, que faz uso do protocolo como tipo
# na dica de tipo
def connect_and_print_result(database: Database) -> None:
    # Podemos inclusive dar a dica de tipo da conexão, apesar de não ser
    # necessário fazer isso explicitamente
    connection: Connection = database.connect("url_de_exemplo")
    result = connection.execute("query de exemplo")
    for element in result:
        print(element)


def main() -> None:
    database_name = input("Database: ").lower()

    if database_name == "postgres":
        # Podemos chamar a função passando qualquer coisa que respeite o
        # protocolo Database, seja um PostgresDatabase
        connect_and_print_result(PostgresDatabase())
    elif database_name == "mysql":
        # ou seja um MySQLDatabase
        connect_and_print_result(MySQLDatabase())
    else:
        raise ValueError("Database inválido!")


if __name__ == "__main__":
    main()
