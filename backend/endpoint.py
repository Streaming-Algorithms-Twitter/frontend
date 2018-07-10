
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

import json

from py_bloom_filter.bloom_filter import BloomFilter

app = Flask(__name__)
CORS(app)
api = Api(app)

manual_bloom = None

class InitializeManualBloomFilter(Resource):
    def get(self, num_bytes, num_hashes):
        global manual_bloom
        manual_bloom = BloomFilter(num_bytes, num_hashes)
        print(manual_bloom)
        return {"state": manual_bloom.state()}

class AddToManualBloomFilter(Resource):
    def get(self, key):
        prevState = manual_bloom.state()
        manual_bloom.add(key)
        return {"prevState": prevState,
                "state": manual_bloom.state(),
                "fprate": manual_bloom.false_positive_probability() }
                
class CheckManualBloomFilter(Resource): 
    def get(self, key):
        result = manual_bloom.check(key)
        return { "found": result, "fprate": manual_bloom.false_positive_probability() }

api.add_resource(InitializeManualBloomFilter,
        '/search-algorithms/bloom-filter/manual/init/<int:num_bytes>/<int:num_hashes>')
api.add_resource(AddToManualBloomFilter,
        '/search-algorithms/bloom-filter/manual/add/<key>')
api.add_resource(CheckManualBloomFilter,
        '/search-algorithms/bloom-filter/manual/check/<key>')

if __name__ == '__main__':
    app.run(debug=True)
