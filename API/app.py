from flask import Flask
from flask import request

from flask_cors import CORS
import simplejson as json

import datetime
from init_db import DataBase

app = Flask(__name__)
CORS(app)

def datetime2string(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

@app.route("/invoice",methods=['GET'])
def invoice():
    
    fecha_inicio = request.args.get('fecha_inicio')
    fecha_fin = request.args.get('fecha_fin')
                
    db = DataBase()
    query = 'SELECT * FROM invoices where invoice_date >= %s AND invoice_date < %s ;'    
    
    params = [fecha_inicio,fecha_fin]    
    
    return json.dumps( db.exec( query , params ) , default = datetime2string )

if __name__ == '__main__':
    app.run(debug=True, port=5000)