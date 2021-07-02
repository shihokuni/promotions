"""
Test Factory to make fake objects for testing
"""

import factory
from factory.fuzzy import FuzzyChoice
from service.models import Promotion
from datetime import date, datetime



class PromotionFactory(factory.Factory):
    """ Creates fake promotions that you don't have to feed """

    class Meta:
        model = Promotion

    id = factory.Sequence(lambda n: n)
    title = FuzzyChoice(choices=["Christmas Sale", "New Product", "Black Friday", "Summer Sale"])
    promotion_type = FuzzyChoice(choices=["buy 1 get 2", "10%OFF", "20%OFF", "buy 1 get 1 free"])
    start_date = FuzzyChoice(choices=["2021-07-01", "2021-01-01", "2021-12-01", "2021-11-01"])
    end_date = FuzzyChoice(choices=["2022-07-01", "2022-01-01", "2022-12-01", "2022-11-01"])
    active = FuzzyChoice(choices=[True, False])
