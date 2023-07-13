from abc import ABC, abstractmethod


class X(ABC):
    @abstractmethod
    def exemplo(self):
        print("Classe-base abstrata")


class Y(X):
    def exemplo(self):
        super().exemplo()
        print("Subclasse")


z = Y()
z.exemplo()
