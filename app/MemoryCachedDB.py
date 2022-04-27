import hashlib


class MemoryCachedDB(object):
    data: dict = None

    def __init__(self):
        self.data = {}

    @staticmethod
    def md5(key):
        return hashlib.md5(str(key).encode()).hexdigest()

    def insert_value(self, value: object):
        key = self.md5(id(value))
        self.data[key] = value
        return key

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


if __name__ == '__main__':
    db = MemoryCachedDB()
    db.insert(1, 'a')
    db.insert(2, 'b')
    db.insert(3, 'c')
    db.insert_value(6)
    print(db.get_all())
