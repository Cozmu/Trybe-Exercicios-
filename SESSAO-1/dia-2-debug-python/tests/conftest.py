import pytest

# @pytest.fixture(scope="module") para mudar o escopo da fixture
@pytest.fixture
def my_list():
    return [1, 2, 3]

def pytest_configure(config):
    config.addinivalue_line(
        "markers", "slow: marks tests as slow"
    )