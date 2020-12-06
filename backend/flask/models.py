# -*- coding: utf-8 -*-

from app import db
from flask import current_app


class News(db.Model):
  __tablename__ = 'news'
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(20), nullable=False)
  content = db.Column(db.Text, nullable=False)