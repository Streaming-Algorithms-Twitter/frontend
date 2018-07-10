
#ifndef NAIVE_ARRAY_H
#define NAIVE_ARRAY_H

#include "streaming_search_algorithm.h"

#include <vector>
#include <string>

class NaiveArray: public StreamingSearchAlgorithm {
private:
	std::vector<std::string> entries;
	unsigned long long byte_size = 0;
public:
	void add(std::string new_entry);
	bool check(std::string possibility);
	unsigned long long size();
};

#endif
