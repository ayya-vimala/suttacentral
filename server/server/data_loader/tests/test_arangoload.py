from typing import List

from arango import ArangoClient
from flask import Flask
import pytest

from common.utils import app_context, empty_arango
from data_loader import arangoload


@app_context
@empty_arango
def test_setup_db_no_db(app: Flask, arango: ArangoClient):
    """
    Checks if database is properly created
    """
    db_name = app.config.get('ARANGO_DB')
    arangoload.setup_database(arango, db_name)
    assert db_name in arango.databases()


@pytest.mark.parametrize('input_uid_range,expected_result,not_valid', [
    ('sn12-14', ['sn12', 'sn13', 'sn14'], []),
    ('fh12.33-12.34', ['fh12.33', 'fh12.34'], []),
    ('dhsk12-dhsk13', ['dhsk12', 'dhsk13'], []),
    ('sn19.19-sn19.21', ['sn19.19', 'sn19.20', 'sn19.21'], ['sn19.21']),
    ('sfsdfsf', [], ['sn19.21'])
])
def test_get_true_uids(input_uid_range: str, expected_result: List[str], not_valid: List[str]):
    all_uids = [uid for uid in expected_result if uid not in not_valid]

    results = arangoload.get_true_uids(input_uid_range, set(all_uids))
    assert results == all_uids


def test_print_once(capsys):
    was = set()
    msgs = ['test', 'test2', 'test2', 'test3']
    expected = set(msgs)
    for msg in msgs:
        arangoload.print_once(msg, was)
    out, err = capsys.readouterr()
    assert set(out.split()) == expected