pipeline {
    agent {
        docker {
            image 'registry.cn-hangzhou.aliyuncs.com/acs/python:3.9-buster' 
            args '-v /root/.m2:/root/.m2' 
        }
    }
    stages {
        stage('Pre-Tesks') { 
            steps {
                sh 'ls' 
            }
        }
        stage('Build') { 
            steps {
                sh 'ls' 
            }
        }
        stage('Test') { 
            steps {
                sh 'ls' 
            }
        }
        stage('Post-Tasks') { 
            steps {
                sh 'ls' 
            }
        }
    }
}