from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
from repository import *
import json
import sys

app = Flask("fusbal")
CORS(app)

def validatePutRequest():
    if (request.method == 'PUT'):
        if (request.headers['Content-Type'] == "application/json"):
            resp = Response(status=200)
        else:
            resp = Response(status=415)

    else:
        resp = Response(status=405)
    return resp

@app.route("/")
def index():
    return "Fusbal management"

@app.route("/games/")
@cross_origin()
def listAllGames():

    js = gamelog.getAllGames()
    resp = Response(json.dumps(js), status=200, mimetype="application/json")
    return resp

@app.route("/games/add", methods=['PUT'])
def addGameEntry():
    resp = validatePutRequest()
    if(resp.status_code == 200):
        try:
            args = request.json
            print("Adding game:", args)
            gamelog.addGame(args)
        except:
            raise
    return resp


if (__name__ == "__main__"):
    app.run()