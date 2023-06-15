class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]


    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None
    
    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None
    
    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                item.name = new_name
        

instance_hash_map = HashMap()
employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

for id_num, name in employees:
    employee = Employee(id_num, name)
    instance_hash_map.insert(employee)

print(instance_hash_map.get_value(23))

print(instance_hash_map.get_value(10))
instance_hash_map.update_value(10, "name30")
print(instance_hash_map.get_value(10))


    