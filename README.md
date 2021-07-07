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
```

## REST API 

The REST API is described below.

## Get list of promotions

```
GET /promotions

curl -i -H 'Accept: application/json' http://localhost:5000/promotions/

Response

HTTP/1.1 200 OK
Date: Sun, 12 Dec 2021 00:00:00 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
Content-Length: 2

[
  {
    "active": true,
    "end_date": "Sun, 12 Dec 2021 00:00:00 GMT",
    "id": 1,
    "promotion_type": "20%OFF",
    "start_date": "Fri, 01 Jan 2021 00:00:00 GMT",
    "title": "sale"
  },
  {
    "active": true,
    "end_date": "Sun, 12 Dec 2021 00:00:00 GMT",
    "id": 2,
    "promotion_type": "20%OFF",
    "start_date": "Fri, 01 Jan 2021 00:00:00 GMT",
    "title": "test"
  }
]
```


```
GET /promotions/<int:promotion_id>

curl -i -H 'Accept: application/json' http://localhost:5000/promotions/1

Response

HTTP/1.1 200 OK
Date: Sun, 12 Dec 2021 00:00:00 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
Content-Length: 36

{
  "active": true,
  "end_date": "Sun, 12 Dec 2021 00:00:00 GMT",
  "id": 1,
  "promotion_type": "20%OFF",
  "start_date": "Fri, 01 Jan 2021 00:00:00 GMT",
  "title": "sale"
}
```

```
POST /promotions/

Response

HTTP/1.1 200 OK
Date: Sun, 12 Dec 2021 00:00:00 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
Content-Length: 36

{
  "active": true,
  "end_date": "Sun, 12 Dec 2021 00:00:00 GMT",
  "id": 1,
  "promotion_type": "20%OFF",
  "start_date": "Fri, 01 Jan 2021 00:00:00 GMT",
  "title": "sale"
}
```

```
PUT /promotions/<int:promotion_id>

Response

HTTP/1.1 200 OK
Date: Sun, 12 Dec 2021 00:00:00 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
Content-Length: 36

{
  "active": true,
  "end_date": "Sun, 12 Dec 2021 00:00:00 GMT",
  "id": 1,
  "promotion_type": "20%OFF",
  "start_date": "Fri, 01 Jan 2021 00:00:00 GMT",
  "title": "sale"
}
```


```
DELETE /promotions/<int:promotion_id>

curl -i -H 'Accept: application/json' -X DELETE http://localhost:5000/promotions/1/

Response

HTTP/1.1 204 No Content
Date: Sun, 12 Dec 2021 00:00:00 GMT
Status: 204 No Content
Connection: close
```


```
PUT /promotions/<int:promotion_id>/activate

Response

HTTP/1.1 200 OK
Date: Sun, 12 Dec 2021 00:00:00 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
Content-Length: 40

{
  "active": true,
  "end_date": "Sun, 12 Dec 2021 00:00:00 GMT",
  "id": 1,
  "promotion_type": "20%OFF",
  "start_date": "Fri, 01 Jan 2021 00:00:00 GMT",
  "title": "sale"
}
```

```
PUT /promotions/<int:promotion_id>/deactivate

Response

HTTP/1.1 200 OK
Date: Sun, 12 Dec 2021 00:00:00 GMT
Status: 200 OK
Connection: close
Content-Type: application/json
Content-Length: 40

{
  "active": false,
  "end_date": "Sun, 12 Dec 2021 00:00:00 GMT",
  "id": 1,
  "promotion_type": "20%OFF",
  "start_date": "Fri, 01 Jan 2021 00:00:00 GMT",
  "title": "test"
}
```