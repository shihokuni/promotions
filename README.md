# Promotions RESTful service

This is the repository for a RESTful service for adding promotions to products on an e-commerce store.

## Team Members
1. Kunimasa, Shiho sk8536@nyu.edu
2. Qaddoumi, Abed amq259@nyu.edu
3. Tsen, Jeff cjt409@nyu.edu
4. Mahindra, Prateek pm3147@nyu.edu
5. Meng, Ting Chien tcm390@nyu.edu

## Overview

 The `/service` folder contains the `models.py` file for the promotions model and a `service.py` file for your service. The `/tests` folder has test cases for testing the model and the service separately. You can use this service to `CREATE, READ, UPDATE, DELETE, LIST, QUERY` promotions to the products on an e-commerce store.

 ## Setup
 Use `Vagrant up` and `Vagrant ssh` to setup virtual machine 

To run the Flask app, please use the following commands:
`$ cd /vagrant`
 `$ FLASK_APP=service:app flask run -h 0.0.0.0`

 Use `nosetests` to run tests for the RESTful service

## Contents

The project contains the following:

```text
.coveragerc         - settings file for code coverage options
.gitignore          - this will ignore vagrant and other metadata files
dot-env-example     - copy to .env to use environment variables
requirements.txt    - list if Python libraries required by your code
config.py           - configuration parameters

service/            - service python package
├── __init__.py     - package initializer
├── models.py       - module with business models
└── service.py      - module with service routes

tests/              - test cases package
├── __init__.py     - package initializer
├── test_models.py  - test suite for busines models
└── test_service.py - test suite for service routes

Vagrantfile         - Vagrant file that installs Python 3 and PostgreSQL

