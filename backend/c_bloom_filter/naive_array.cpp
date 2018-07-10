
#include "naive_array.h"
#include <algorithm>

void NaiveArray::add(std::string new_entry) {
	if (!check(new_entry)) {
		this->entries.push_back(new_entry);
		this->byte_size += new_entry.size();
	}
}

bool NaiveArray::check(std::string possibility) {
	auto vec = this->entries;
	return std::find(vec.begin(),vec.end(),possibility) != vec.end();
}

unsigned long long NaiveArray::size() {
	return this->byte_size;
}

