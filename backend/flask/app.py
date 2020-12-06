# -*- coding: utf-8 -*-

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://wsh:wsh@localhost:3306/xiaowei?charset=utf8'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=True
app.config['JSON_AS_ASCII'] = False
db = SQLAlchemy(app,use_native_unicode='utf8')

@app.route('/')
def index():
    return {
        'msg': 'hello world, 你好'
    }
