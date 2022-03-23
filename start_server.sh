git checkout master
git fetch --all
git reset --hard origin/master
git pull

python3 -m pip install -r requirements.txt
#python3 manage.py makemigrations
#python3 manage.py migrate
#python3 manage.py makemigrations shop
#python3 manage.py migrate shop


python3 manage.py runserver 0.0.0.0:5008
