from pymongo import MongoClient

connectionString = 'mongodb://localhost:27017'
gamelogDb = 'gamelog'
gamesCollection = 'game_history'
__all__ = ["gamelog"]

def getMongoClient():
    client = MongoClient(connectionString)
    return client[gamelogDb]