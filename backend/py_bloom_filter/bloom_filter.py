
from bitarray import bitarray

class BloomFilter:
    def __init__(self,byte_size,num_hashes):
        self.num_hashes = num_hashes
        self.bit_count = byte_size * 8
        self.backing = bitarray([0]*self.bit_count)
        self.encountered_words = 0
        self.surely_unique_words = 0

    def __str__(self):
        return "Bloomfilter: " + str(self.num_hashes) + " hashes, size " + str(self.bit_count) + ", store-" + str(self.backing)


    def check(self, possibility):
        for i in range(0,self.num_hashes):
            key = possibility + str(i)
            index = hash(key) % self.bit_count
            if not self.backing[index]:
                return False
        return True

    def add(self, new_term):
        self.encountered_words += 1
        if not self.check(new_term):
            self.surely_unique_words += 1
            for i in range(0,self.num_hashes):
                key = new_term + str(i)
                index = hash(key) % self.bit_count
                self.backing[index] = True

    def size(self):
        return self.bit_count / 8

    def false_positive_probability(self):
        return ((1 - 1 / float(self.bit_count)) ** (self.num_hashes * self.surely_unique_words)) ** (self.num_hashes)

    def state(self):
        return list(map(lambda x: 1 if x else 0, self.backing.tolist()))
