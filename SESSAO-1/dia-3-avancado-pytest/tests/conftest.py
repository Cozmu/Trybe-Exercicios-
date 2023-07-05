import pytest


# def test_faker_email(faker):
#     fake_email = faker.email()
#     assert isinstance(fake_email, str)
#     assert '@' in fake_email
#     assert '.' in fake_email


@pytest.fixture(scope="session", autouse=True)
def faker_seed():
    return 'Trybe'


@pytest.fixture(scope="session", autouse=True)
def faker_locale():
    return "pt_BR"