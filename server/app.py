'''server/app.py - main api app declaration'''
from flask import Flask, jsonify, send_from_directory, json,request
from flask_cors import CORS
from collections import defaultdict
from itertools import islice
from itertools import groupby
import json
import os
  
'''Main wrapper for app creation'''
app = Flask(__name__, static_folder='../build')
CORS(app)

'''To read data file'''
fileDir = os.path.dirname(os.path.realpath('__file__'))
fileName = os.path.join(fileDir, 'data/data.json')
with open(fileName, 'r') as jsonFile:
  data = json.load(jsonFile)


##
# title: Get All Strips Service
# description: Returns the list of Strips available from the data file.
# version: "1.0"
##
def json_response(payload, status=200):
  return (json.dumps(payload,  default=lambda o: o.__dict__), status, {'content-type': 'application/json'})

@app.route('/getAllStrips', methods=["GET"])
def getAllStrips():
  class Strip:
    def __init__(self,num,safe_title):
        self.title = safe_title
        self.id = num

  stripList = []
  for elem in data:
    stripList.append(Strip(elem['num'], elem['safe_title']))
  
  formattedData = {'data' : stripList}
  return json_response(formattedData)

@app.route('/getAllStrips/<int:num>', methods=["GET"])
def getStripDetails(num):
    class MatchingStrip:
      def __init__(self,month,num,year,safe_title,transcript,day):
        self.month = month
        self.number = num
        self.year = year
        self.title = safe_title
        self.description = transcript
        self.day = day

    matchingStrip = [x for x in data if x['num']== num][0]
    stripDetails = MatchingStrip(matchingStrip['month'], matchingStrip['num'], matchingStrip['year'], matchingStrip['safe_title'],matchingStrip['transcript'],matchingStrip['day'])
    formattedData = {'data' : stripDetails}
    return json_response(formattedData)
