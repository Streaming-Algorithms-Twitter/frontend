
CC=clang++
CFLAGS=-c -std=c++11 -Wall
LDFLAGS=
SOURCES=main.cpp naive_array.cpp bloom_filter.cpp
OBJECTS=$(SOURCES:.cpp=.o)
EXEC=alg.out

all: $(SOURCES) $(EXEC)

$(EXEC): $(OBJECTS)
	$(CC) $(LDFLAGS) $(OBJECTS) -o $@

.cpp.o: 
	$(CC) $(CFLAGS) $< -o $@

clean:
	rm *.o *.out

run: all
	./$(EXEC)
