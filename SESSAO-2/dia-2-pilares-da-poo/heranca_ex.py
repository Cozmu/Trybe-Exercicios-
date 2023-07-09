class Vehicle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity
    
    def move(self, distance: int) -> str:
        return f'{self.name} carried {self.capacity} people across {distance} kilometers.'


class Car(Vehicle):
    def move(self, distance: int) -> str:
        return f"Car {super().move(distance)}"
    

class Motorcycle(Vehicle):
    def __init__(self, name: str) -> None:
        super().__init__(name, 2)
    

class Contact:
    def __init__(self, name:str, email:str) -> None:
        self.name = name
        self.email = email
    

class ContactList:
    def __init__(self, contacts:list, favorites:list) -> None:
        self.contacts = contacts
        self.favorites = favorites
    
    def add_contact(self, contact) -> None:
        self.contacts.append(contact)
    
    def _find_contact(self, name: str, from_favorites=False) -> Contact:
        contact_list = self.favorites if from_favorites else self.contacts

        try:
            contact = [c for c in contact_list if c.name == name][0]
        except IndexError:
            raise LookupError(f"Contact named {name} not found")

        return contact

    def remove_contact(self, name:str) -> None:
        contact = self._find_contact(name)
        self.contacts.remove(contact)
        return contact
    
    def add_to_favorites(self, name: str) -> None:
        contact = self._find_contact(name)
        self.contacts.remove(contact)
        self.favorites.append(contact)

    def remove_from_favorites(self, name: str) -> None:
        contact = self._find_contact(name, from_favorites=True)
        self.favorites.remove(contact)
        self.contacts.append(contact)