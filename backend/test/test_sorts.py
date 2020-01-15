import pytest
import random

from lib.insertion_sort import insertion_sort
from lib.quick_sort import quick_sort
from lib.merge_sort import merge_sort
from lib.bubble_sort import bubble_sort

random.seed(30)

testdata = [[random.randint(-1000,1000) for i in range(1000)] for i in range(10)]
testdata += [[random.randint(-1000,1000)/1000 for i in range(1000)] for i in range(10)]


@pytest.mark.parametrize("L",testdata)
def test__insertion_sort(L):
    assert insertion_sort(L)==sorted(L)

@pytest.mark.parametrize("L",testdata)
def test__quick_sort(L):
    assert quick_sort(L)==sorted(L)

@pytest.mark.parametrize("L",testdata)
def test__merge_sort(L):
    assert merge_sort(L)==sorted(L)

@pytest.mark.parametrize("L",testdata)
def test__bubble_sort(L):
    assert bubble_sort(L)==sorted(L)