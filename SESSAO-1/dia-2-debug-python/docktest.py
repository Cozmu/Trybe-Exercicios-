def mean(numbers):
    """
    Calcula a média de uma lista de números.

    >>> my_list = [1, 2, 3, 4, 5]
    >>> mean(my_list)
    3.0
    >>> mean([2.5, 3.75, 1.25, 4])
    2.875
    >>> mean([])
    0

    """
    try:
        return sum(numbers) / len(numbers)
    except ZeroDivisionError:
        return 0


def sum_two_numbers(a, b):
    """Retorna a soma de dois números recebidos por parâmetro.

    Exemplos
    --------
    >>> sum_two_numbers(0, 0)
    0
    >>> sum_two_numbers(2, 2) 
    4
    """
    return a + b
