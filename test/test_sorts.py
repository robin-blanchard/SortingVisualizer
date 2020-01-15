import pytest
import random

from lib.insertion_sort import insertion_sort
from lib.quick_sort import quick_sort

random.seed(30)

testdata = [[random.randint(-1000,1000) for i in range(1000)] for i in range(10)]


@pytest.mark.parametrize("L",testdata)
def test__insertion_sort(L):
    assert insertion_sort(L)==sorted(L)

@pytest.mark.parametrize("L",testdata)
def test__quick_sort(L):
    assert quick_sort(L)==sorted(L)