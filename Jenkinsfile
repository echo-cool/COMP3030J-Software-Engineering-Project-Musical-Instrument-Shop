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
        stage('Deploy') { 
            steps {
                
                sshagent(['efe4fb22-9a6d-49d4-aea5-de7d077d397e']) {
                    sh """
                       ssh -o StrictHostKeyChecking=no -l group8 comp3030j.ucd.ie '
                            ls
                            cd /home/group8/comp3030j-project
                            bash start_server.sh &
                       '
                       """
                }
            }
        }
        stage('Post-Tasks') { 
            steps {
                sh 'echo Done!' 
            }
        }
    }
}