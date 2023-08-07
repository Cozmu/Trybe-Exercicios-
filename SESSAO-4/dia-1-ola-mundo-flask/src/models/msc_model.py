from pymongo.collection import Collection
import random
from .abstract_model import AbstractModel
from .db import db


class MusicModel(AbstractModel):

    _collection: Collection = db["musics"]

    def __init__(self, json_data: dict):
        super().__init__(json_data)

    def to_dict(self):
        return {
            "_id": str(self.data["_id"]),
            "music": self.data["music"],
        }

    @classmethod
    def get_random(cls):
        data = cls.find()
        if not data: return
        return random.choice(data)