#include "bloom_filter.h"
#include "naive_array.h"
#include <iostream>

void construct_bloom_filter() {
    BloomFilter b(1u ,12ull);
    b.add("hello");
    std::cout<< b.to_string()<< std::endl;

    std::cout<< "Has hello been added? : " << b.check("hello")<< std::endl;

    b.add("Bye");
    std::cout<< b.to_string()<< std::endl;

    std::cout<< b.get_surely_unique_words()<< std::endl;
    std::cout<< b.to_string()<< std::endl;
    std::cout<< b.false_positive_probability()<< std::endl;
}

using namespace std;

void test_algorithm(StreamingSearchAlgorithm *alg) {
    alg->add("key");
    alg->add("trend");
    cout << "Contains key: " << alg->check("key") << endl;
    cout << "Caontans yummy: " << alg->check("yummy") << endl;
    cout << "Size taken by algorithm: " << alg->size() << " bytes" << endl;	
}

int main()
{
    //construct_bloom_filter();
	StreamingSearchAlgorithm *alg = new NaiveArray();
	test_algorithm(alg);

    StreamingSearchAlgorithm *bloom = new BloomFilter(8u ,12ull);
	test_algorithm(bloom);

	//delete alg;
	return 0;
}
