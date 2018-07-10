#include "bloom_filter.h"
#include <boost/lexical_cast.hpp>
#include <iterator>
#include <algorithm>
#include <sstream>
#include <iterator>
#include <iostream>

using boost::lexical_cast;
#include <string>
#include <math.h>

BloomFilter::BloomFilter(unsigned int _hash_functions, unsigned long long _byte_size)
{
    this->hash_functions = _hash_functions;
    this->bit_count = _byte_size * 8ull;
    this->track_vector = new std::vector<bool>(this->bit_count);
    this->encountered_words = 0ul;
    this->surely_unique_words = 0u;
}

void BloomFilter::add(std::string term)
{
    this->encountered_words++;
    if (!check(term))
    {
        this->surely_unique_words++;
        for (unsigned int i = 0; i < this->hash_functions; i++)
        {
            (*this->track_vector)[this->string_hash(term + lexical_cast<std::string>(i)) % bit_count] = true;
        }
    }
}

bool BloomFilter::check(std::string term)
{
    for (unsigned int i = 0; i < this->hash_functions; i++)
    {
        if (!(*(this->track_vector))[this->string_hash(term + lexical_cast<std::string>(i)) % bit_count])
        {
            return false;
        }
    }
    return true;
}

float BloomFilter::false_positive_probability()
{
    return pow(1 -
                   pow(1 - 1 / lexical_cast<double>(bit_count), this->hash_functions * this->surely_unique_words),
               this->hash_functions);
}

unsigned long long BloomFilter::size()
{
    return this->bit_count / 8ull;
}

unsigned long BloomFilter::get_encountered_words()
{
    return this->encountered_words;
}

unsigned int BloomFilter::get_surely_unique_words()
{
    return this->surely_unique_words;
}

std::string BloomFilter::to_string()
{
    std::ostringstream oss;

    if (!track_vector->empty())
    {
        // Convert all but the last element to avoid a trailing ","
        std::copy(track_vector->begin(), track_vector->end() - 1,
                  std::ostream_iterator<int>(oss, ","));

        // Now add the last element with no delimiter
        oss << track_vector->back();
    }

    return oss.str();
}