import sys

from py_bloom_filter import BloomFilter
from py_bloom_filter import NaiveArray

from twitter_stream import stream_data

# Create the two algorithmic approaches.
blm = BloomFilter(8,12)
naive = NaiveArray()

def recieve_data(hashtags):
    # For each hashtag, add the hashtags into the two data structures.
    for hashtag in hashtags:
        blm.add(hashtag["text"])
        naive.add(hashtag["text"])

stream = stream_data(recieve_data)
        
while True:
    user_input = input("")
    if user_input == "exit":
        # Disconnect/Shut down worker threads.
        stream.disconnect()

        # Print statistics:
        print("Prog. Statistics:")
        
        print("Bloom Filter:")
        print(blm)

        print("Naive Array:")
        print(naive)

        # Shut her down.
        sys.exit(0)
        
