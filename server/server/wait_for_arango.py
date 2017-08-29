from arango import ArangoClient
from arango.exceptions import DatabaseListError
import os
from requests.exceptions import ConnectionError
import time


def connect():
    client = ArangoClient(
        host=os.getenv('ARANGO_HOST'),
        port=os.getenv('ARANGO_PORT'),
        username=os.getenv('ARANGO_USER'),
        password=os.getenv('ARANGO_ROOT_PASSWORD'),
    )
    client.databases()

while True:
    try:
        connect()
        break
    except (ConnectionError, DatabaseListError):
        time.sleep(1)
