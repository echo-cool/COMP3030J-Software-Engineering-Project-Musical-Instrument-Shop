#!/usr/bin/env python
import os
import sys
import threading

# configured = False
#
#
# def config_database():
#     global configured
#     if not configured:
#         os.system("python manage.py makemigrations")
#         os.system("python manage.py migrate")
#         configured = True


if __name__ == "__main__":
    # config_database()
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "app.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
execute_from_command_line(sys.argv)
