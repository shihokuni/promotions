"""
Models for Promotion Service

All of the models are stored in this module

Models
------
Promotion - A Promotion is a representation of a special promotion 
or sale that is running against a product or perhaps the entire store

Attributes
-----------

"""

import logging
from enum import Enum
from flask_sqlalchemy import SQLAlchemy

logger = logging.getLogger("flask.app")

# Create the SQLAlchemy object to be initialized later in init_db()
db = SQLAlchemy()


def init_db(app):
    """Initialies the SQLAlchemy app"""
    Promotion.init_db(app)


class DataValidationError(Exception):
    """Used for an data validation errors when deserializing"""

    pass




class Promotion(db.Model):
    """
    Class that represents a Promotion

    This version uses a relational database for persistence which is hidden
    from us by SQLAlchemy's object relational mappings (ORM)
    """

    app = None

    ##################################################
    # Table Schema
    ##################################################

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(63), nullable=False)
    promotion_type = db.Column(db.String(63), nullable=False)
    start_date = db.Column(db.DateTime(), nullable=False)
    end_date = db.Column(db.DateTime(), nullable=False)
    status = db.Column(db.String(63), nullable=True)