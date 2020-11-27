from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from pymongo import ReturnDocument

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'coins'
app.config[
    'MONGO_URI'] = 'mongodb+srv://HackDay2020project_6:nHpEaDEnE9W2vxs@cluster0.ml76g.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongo = PyMongo(app)


# Get all visitors postal code
@app.route('/visitorcount', methods=['GET'])
def get_all_visitorcount():
    visitorcount = mongo.db.visitorcount
    output = []
    for s in visitorcount.find():
        output.append({'_id': s['_id']})
    return jsonify({'result': output})


# Post one visitors postal code
@app.route('/visitorcount/search/<plz>', methods=['POST'])
def get_one_visitorcount(name):
    visitorcount = mongo.db.visitorcount
    s = visitorcount.find_one({'plz': plz})
    if s:
        output = {'plz': s['plz']}
    else:
        output = "No such plz"
    return jsonify({'result': output})


# Create entry plz and event one time without json list
@app.route('/visitorcount/add', methods=['POST'])
def add_event():
    visitorcount = mongo.db.facerecognition
    plz = request.json['plz']
    event = request.json['event']
    visitorcount_id = visitorcount.insert({'plz': plz, 'event': event})
    new_visitorcount = visitorcount.find_one({'_id': visitorcount_id})
    output = {'plz': new_visitorcount['plz'], 'event': new_visitorcount['event']}
    return jsonify({'result': output})


# Create plz and event one time with JSON
@app.route('/visitorcount/add/json', methods=['POST'])
def add_event():
    visitorcount = mongo.db.visitorcount
    _id = request.json['plz']
    event = request.json['event']
    print(_id)
    visitorcount.insert({'_id': _id, 'event': event})
    return jsonify({'result': _id})


### API CREATE AND UPDATE PLZ + EVENT
@app.route('/visitorcount/users', methods=['POST'])
def update_event():
    visitorcount = mongo.db.visitorcount
    user = mongo.db.visitorcount
    _id = request.json['_id']
    event = request.json['event']
    resp = plz.find_one_and_update(
        {"_id": _id},
        {'$push': {'event': event[0]}},
        return_document=ReturnDocument.AFTER)
    if resp:
        return jsonify({'result': resp})
    else:
        visitorcount = mongo.db.visitorcount
        _id = request.json['_id']
        emotions = request.json['event']
        visitorcount_id = visitorcount.insert({'_id': _id, 'event': event})
        new_visitorcount = visitorcount.find_one({'_id': visitorcount_id})
        output = {'_id': new_visitorcount['_id'], 'event': new_visitorcount['event']}
        return jsonify({'result: Event not found': output})
