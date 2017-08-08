from repository import getMongoClient, gamesCollection

def addGame(gameData):
    client = getMongoClient()
    client[gamesCollection].insert_one(gameData)

def getAllGames():
    client = getMongoClient()
    result = []
    for document in client[gamesCollection].find():
        result.append(document['game'])
    return {'games' : result }