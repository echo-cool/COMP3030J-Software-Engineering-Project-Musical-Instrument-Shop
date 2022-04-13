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

python manage.py runserver



python manage.py  makemessages -l zh_Hans -e html,txt,rml
python manage.py  makemessages -l strings
python manage.py compilemessages
#https://zh.crowdin.com/translate/comp3030j/10/en-zhcn?filter=basic&value=0
./localazy.exe upload
./localazy download

java -jar crowdin-cli.jar upload
java -jar crowdin-cli.jar download