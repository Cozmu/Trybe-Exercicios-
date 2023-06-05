from collections import Counter
from abc import ABC, abstractmethod
from math import pi as PI

class TV:
    def __init__(self, tamanho, volume=50, canal=1):
        self.volume = volume
        self.canal = canal
        self.__max_volume_and_canal = 99
        self.tamanho = tamanho
        self.ligado = False
  
    def aumentar_volume(self):
        if self.volume < self.__max_volume_and_canal:
            self.volume += 1

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1
    
    def modificar_canal(self, target_canal):
        if target_canal > self.__max_volume_and_canal or target_canal < 0:
            ValueError(f'{target_canal} esta fora dos limites')
        self.canal = target_canal

    def ligar_desligar(self):
        self.ligado = not self.ligado


class Estatistica:
    def __init__(self, number):
        self.number = number

    def media(self):
        return sum(self.number) / len(self.number)

    def mediana(self):
        numbers = sorted(self.number)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    def moda(self):
        number, _ = Counter(self.number).most_common()[0]
        return number

class FiguraGeometrica:
    @abstractmethod
    def area(self):
        pass
    
    @abstractmethod
    def perimetro(self):
        pass


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado
    
    def area(self):
        return self.lado * self.lado
    
    def perimetro(self):
        return 4 * self.lado

class Retandgulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio
    
    def area(self):
        return PI * self.raio * self.raio

    def perimetro(self):
        return 2 * PI * self.raio