
from bloom_filter import BloomFilter
from naive_array import NaiveArray

def test_algorithm(alg):
    alg.add("key")
    alg.add("trend")
    print(alg.check("key"))
    print(alg.check("yummy"))
    print(alg.size())

blm = BloomFilter(8,12)
test_algorithm(blm)

naive = NaiveArray()
test_algorithm(naive)
