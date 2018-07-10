
#ifndef STREAM_SEARCH_H
#define STREAM_SEARCH_H

#include<string>
class StreamingSearchAlgorithm {
    public:
        virtual void add(std::string) = 0;
        virtual bool check(std::string) = 0;
        virtual unsigned long long size() = 0;
};
#endif 