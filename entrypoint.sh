#!/bin/bash
echo "Starting entrypoint.sh"
if [ -e db/db.sqlite3 ]
then
    echo "Database already exists"
    echo "Running migrations.."
    python manage.py makemigrations
    python manage.py migrate
    echo "Migrations done"

else
    echo "Database does not exist, creating..."
    echo "Running migrations.."
    python manage.py makemigrations
    python manage.py migrate
    echo "Migrations done"
    echo "Creating superuser..."
    echo "Username: admin, Password: 123456"
    echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@echo.cool', '123456')" | python manage.py shell
fi

#python manage.py runserver 0.0.0.0:8080
uwsgi --ini uwsgi.ini
