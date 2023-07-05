from faker import Faker

faker = Faker(locale='pt_BR')
Faker.seed(0)

for index in range(5):
    print(faker.name())

print('--------------------')

print(faker.email())
print(faker.password())
print(faker.address())
print(faker.credit_card_number())
print(faker.phone_number())
print(faker.company())
print(faker.date())
print(faker.cpf())

print('--------------------')

faker_boludo = Faker(locale='es_AR')

print(faker_boludo.last_name())
print(faker_boludo.email())
print(faker_boludo.password())
print(faker_boludo.url())
print(faker_boludo.license_plate())
