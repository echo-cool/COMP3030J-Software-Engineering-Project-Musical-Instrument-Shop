pipeline {
    agent {
        docker {
            image 'python:3.9-buster' 
            args '-v /root/.m2:/root/.m2' 
        }
    }
    stages {
        stage('Pre-Tesks') { 
            steps {
                sh 'pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple' 
            }
        }
        stage('Build') { 
            steps {
                sh 'python manage.py' 
            }
        }
        stage('Test') { 
            steps {
                sh 'python manage.py test' 
            }
        }
        stage('Post-Tasks') { 
            steps {
                sh 'echo Done' 
            }
        }
    }
}