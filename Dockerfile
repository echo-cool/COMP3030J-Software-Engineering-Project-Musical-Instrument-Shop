# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster
# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN apt update
RUN apt install gcc g++ -y
#RUN pip install -i https://pypi.tuna.tsinghua.edu.cn/simple --trusted-host pypi.python.org -r requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt
#ARG pip_source
#RUN if [[ -z "$pip_source" ]] ; then pip install --trusted-host pypi.python.org -r requirements.txt ; else pip install -i $pip_source --trusted-host pypi.python.org -r requirements.txt  ; fi
RUN rm -rf db/
RUN mkdir db/
RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput
#RUN echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@echo.cool', '123456')" | python manage.py shell

# Make port 8000 available to the world outside this container
EXPOSE 8080

RUN chmod 777 entrypoint.sh
# Run app.py when the container launches
CMD ["./entrypoint.sh"]

