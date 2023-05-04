FROM echocool/fyp-rasa-base:3.5.5
# Set the working directory to /app
USER root
WORKDIR /app
# Copy the current directory contents into the container at /app
COPY --chown=1001 . /app

# Install any needed packages specified in requirements.txt
#RUN apt update
#RUN apt install gcc g++ -y
#RUN pip install rasa

RUN rm -rf models
RUN rm -rf .rasa
RUN rasa train

EXPOSE 18888
EXPOSE 18889
EXPOSE 5005
#RUN chmod 777 entrypoint.sh
# set the user to run, don't run as root
USER 1001

#CMD ["./entrypoint.sh"]
#CMD rasa run -p 18888 --enable-api --cors "*"
# set entrypoint for interactive shells
ENTRYPOINT ["rasa"]
CMD ["run","-p","5005","-m","/app/models","--enable-api","--cors","*","--debug" ,"--endpoints", "endpoints.yml", "--log-file", "out.log", "--debug"]
