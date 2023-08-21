from django.core.exceptions import ValidationError


def validate_music_length(value):
    if not 1 >= value >= 3600:
        raise ValidationError("A duração da música deve ser um número"
                              " inteiro entre 1 e 3600 segundos. O valor "
                              "{value} não é válido.")

def validate_name_msc(value):
    if any(char.isdigit() for char in value):
        raise ValidationError("O nome não pode conter números.")