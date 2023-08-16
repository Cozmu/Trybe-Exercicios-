import unittest

from divisao import divide


class TestOperations(unittest.TestCase):
    def test_divide(self):
        self.assertEqual(divide(5, 2), 2.5)
        # caso de falha 
        # self.assertEqual(divide(5, 2), 2.4)


    def test_divide_by_0(self):
        with self.assertRaises(ZeroDivisionError):
            divide(5, 0)

if __name__ == '__main__':
    unittest.main()