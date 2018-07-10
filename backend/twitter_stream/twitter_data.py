import tweepy
from twitter_stream.tokens import *
from threading import Thread
        

def stream_data(callback_function):
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    #override tweepy.StreamListener to add logic to on_status
    class MyStreamListener(tweepy.StreamListener):
    
        def on_status(self, status):
            print(status.entities["hashtags"])
            callback_function(status.entities["hashtags"])

    myStreamListener = MyStreamListener()
    stream = tweepy.Stream(auth = api.auth, listener=myStreamListener)
    stream.filter(locations=[-124,27,-63,49], async=True)

    return stream
