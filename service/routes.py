"""
Promotion  Service

Paths:
------
GET /promotions - Returns a list all of the Promotions
GET /promotions/{id} - Returns the Promotion with a given id number
POST /promotions - creates a new Promotion record in the database
PUT /promotions/{id} - updates a Promotion record in the database
DELETE /promotions/{id} - deletes a Promotion record in the database
PUT /promotions/{id}/activate - activates a Promotion with a given id number
PUT /promotions/{id}/deactivate - deactivates a Promotion with a given id number
"""

import os
import sys
import logging
from flask import Flask, jsonify, request, url_for, make_response, abort
from . import status  # HTTP Status Codes
from werkzeug.exceptions import NotFound

# For this example we'll use SQLAlchemy, a popular ORM that supports a
# variety of backends including SQLite, MySQL, and PostgreSQL
from flask_sqlalchemy import SQLAlchemy
from service.models import Promotion, DataValidationError

# Import Flask application
from . import app

######################################################################
# GET INDEX
######################################################################
@app.route("/")
def index():
    """ Root URL response """
    return (
        jsonify(
            name="Promotion REST API Service",
            version="1.0",
            paths=url_for("list_promotions", _external=True),
        ),
        status.HTTP_200_OK,
    )

######################################################################
# LIST ALL PROMOTIONS
######################################################################
@app.route("/promotions", methods=["GET"])
def list_promotions():
    """ Returns all of the Promotions """


######################################################################
# RETRIEVE A PROMOTION
######################################################################
@app.route("/promotions/<int:Promotion_id>", methods=["GET"])
def get_promotions(promotion_id):
    """
    Retrieve a single Promotion

    This endpoint will return a Promotion based on it's id
    """


######################################################################
# ADD A NEW PROMOTION
######################################################################
@app.route("/promotions", methods=["POST"])
def create_promotions():
    """
    Creates a Promotion
    This endpoint will create a Promotion based the data in the body that is posted
    """


######################################################################
# UPDATE AN EXISTING PROMOTION
######################################################################
@app.route("/promotions/<int:promotion_id>", methods=["PUT"])
def update_promotions(promotion_id):
    """
    Update a Promotion

    This endpoint will update a Promotion based the body that is posted
    """


######################################################################
# DELETE A PROMOTION
######################################################################
@app.route("/promotions/<int:promotion_id>", methods=["DELETE"])
def delete_promotions(promotion_id):
    """
    Delete a Promotion

    This endpoint will delete a Promotion based the id specified in the path
    """


######################################################################
# ACTIVATE AN EXISTING PROMOTION
######################################################################
@app.route("/promotions/<int:promotion_id>/activate", methods=["PUT"])
def activate_promotions(promotion_id):
    """
    Activate a Promotion

    This endpoint will activate a Promotion based on the id specified in the path
    """


######################################################################
# DEACTIVATE AN EXISTING PROMOTION
######################################################################
@app.route("/promotions/<int:promotion_id>/deactivate", methods=["PUT"])
def deactivate_promotions(promotion_id):
    """
    Deactivate a Promotion

    This endpoint will deactivate a Promotion based on the id specified in the path
    """

