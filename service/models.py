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



    def serialize(self):
        """Serializes a Pet into a dictionary"""
        return {
            "id": self.id,
            "title": self.title,
            "promotion_type": self.promotion_type,
            "start_date": self.start_date,
            "end_date": self.end_date, 
            "status": self.status, 
        }

    def deserialize(self, data):
        """
        Deserializes a Pet from a dictionary

        :param data: a dictionary of attributes
        :type data: dict

        :return: a reference to self
        :rtype: Pet

        """
        try:
            self.title = data["title"]
            self.promotion_type = data["promotion_type"]
            self.start_date= data["available"]
            self.end_date = data["end_date"]  
            self.status = data["status"] 
        except KeyError as error:
            raise DataValidationError("Invalid promotion: missing " + error.args[0])
        except TypeError as error:
            raise DataValidationError(
                "Invalid promotion: body of request contained bad or no data"
            )
        return self

    ##################################################
    # CLASS METHODS
    ##################################################

    @classmethod
    def init_db(cls, app):
        """Initializes the database session

        :param app: the Flask app
        :type data: Flask

        """
        logger.info("Initializing database")
        cls.app = app
        # This is where we initialize SQLAlchemy from the Flask app
        db.init_app(app)
        app.app_context().push()
        db.create_all()  # make our sqlalchemy tables