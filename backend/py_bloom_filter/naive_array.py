
class NaiveArray:

    def __init__(self):
        self.entries = []
        self.byte_size = 0

    def check(self,possible_entry):
        return possible_entry in self.entries

    def add(self,new_entry):
        if not self.check(new_entry):
            self.entries.append(new_entry)
            self.byte_size += len(new_entry)

    def size(self):
        return self.byte_size

    def __str__(self):
        return "NaiveArray: size " + str(self.byte_size * 8)
