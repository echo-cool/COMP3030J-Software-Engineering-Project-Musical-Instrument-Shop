pipreqs --encoding=utf-8 --force

python -m pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py makemigrations shop
python manage.py migrate shop



pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U

python manage.py createsuperuser


python manage.py seed shop --number=15