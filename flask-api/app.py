from flask import Flask
from flask_cors import CORS
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
from pymongo import ReturnDocument

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'visitorcount'
app.config[
    'MONGO_URI'] = 'mongodb+srv://HackDay2020project_6:***************@cluster0.ml76g.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongo = PyMongo(app)

# Cross origin response header
@app.route("/visitorcount")
def crossorigin():
  return "cross-origin-world!"

# Get all visitors postal code (read all data _id)
@app.route('/visitorcount', methods=['GET'])
def get_all_visitorcount():
    visitorcount = mongo.db.visitorcount
    output = []
    for s in visitorcount.find():
        output.append({'plz': s['plz']})
    return jsonify({'result': output})

# Get all visitors postal code (read all data _id)
@app.route('/visitorcount/event', methods=['GET'])
def get_all_visitorcount_event():
    visitorcount = mongo.db.visitorcount
    output = []
    for s in visitorcount.find():
        output.append({'event': s['event']})
    return jsonify({'result': output})

# Post one visitors postal code (read all plz)
@app.route('/visitorcount/search/<plz>', methods=['GET'])
def get_one_visitorcount(plz):
    visitorcount = mongo.db.visitorcount
    s = visitorcount.find_one({'plz': plz})
    if s:
        output = {'plz': s['plz']}
    else:
        output = "No such plz"
    return jsonify({'result': output})


# Create entry plz and event one time
@app.route('/visitorcount/add', methods=['POST'])
def add_event():
    visitorcount = mongo.db.visitorcount
    plz = request.json['plz']
    event = request.json['event']
    visitorcount_id = visitorcount.insert({'plz': plz, 'event': event})
    new_visitorcount = visitorcount.find_one({'_id': visitorcount_id})
    output = {'plz': new_visitorcount['plz'], 'event': new_visitorcount['event']}
    return jsonify({'result': output})

if __name__ == '__main__':
	app.run(debug=True)
