python -m pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py makemigrations shop
python manage.py migrate shop


python3 manage.py runserver 0.0.0.0:8881
