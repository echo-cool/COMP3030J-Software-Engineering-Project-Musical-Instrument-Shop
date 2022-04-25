import hashlib


class MemoryCachedDB(object):
    data: dict = None

    def __init__(self):
        self.data = {}

    @staticmethod
    def md5(key):
        return hashlib.md5(key.encode()).hexdigest()

    def insert(self, key, value):
        self.data[key] = value

    def get(self, key):
        return self.data.get(key, None)

    def delete(self, key):
        if key in self.data:
            del self.data[key]
            return True
        return False

    def update(self, key, value):
        if key in self.data:
            self.data[key] = value
            return True
        return False

    def get_all(self):
        return self.data

    def get_all_keys(self):
        return self.data.keys()

    def get_all_values(self):
        return self.data.values()




