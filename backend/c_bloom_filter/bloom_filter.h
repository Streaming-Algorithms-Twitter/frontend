
#ifndef BLOOM_FILTER_H
#define BLOOM_FILTER_H

#include <boost/functional/hash.hpp>
#include "streaming_search_algorithm.h"
#include <vector>
#include<string>

class BloomFilter: public StreamingSearchAlgorithm {
    private:
        boost::hash<std::string> string_hash;
        unsigned int hash_functions;
        unsigned long long bit_count;
        std::vector<bool> * track_vector;
        unsigned int encountered_words;
        unsigned int surely_unique_words;
    public:
        BloomFilter(unsigned int _hash_functions, unsigned long long _byte_size);
        void add(std::string);
        bool check(std::string);
        unsigned long long size();
        unsigned long get_encountered_words();
        unsigned int get_surely_unique_words();
        float false_positive_probability();
        std::string to_string();
};
#endif 