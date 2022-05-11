import os
import psycopg2
from psycopg2.extras import RealDictCursor

class DataBase:
    
    def __init__(self):        
        self.conn = psycopg2.connect(
                host="devtestdatabase.contalink.com",
                database="testinvoices",
                user='developer',
                password='UQpaA9TA')

    def exec(self,query,params):
        cur = self.conn.cursor(cursor_factory=RealDictCursor)
        cur.execute(query,params)
        self.conn.commit()
        
        results = cur.fetchall()        
        
        cur.close()
        self.conn.close()
        
        return results
        
        

# query = 'SELECT * FROM invoices;'

# p1 = DataBase()
# print (p1.exec(query,[]))