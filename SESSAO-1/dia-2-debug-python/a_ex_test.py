import pytest


@pytest.fixture
def my_list():
    return [1, 2, 3] 

def test_a_simple_test():
    assert True

def test_sum(my_list):
    assert sum(my_list) == 6

def test_list_item_multiply(my_list):
    assert [item * 3 for item in my_list] == [3, 6, 9]
