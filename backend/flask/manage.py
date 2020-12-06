# -*- coding: utf-8 -*-

from app import app
from models import db

if __name__ == "__main__":
    db.drop_all()
    # db.create_all()
    app.run(host='localhost',port='5000',debug=True)