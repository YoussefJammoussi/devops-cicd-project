pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "youssef42/app-backend:v1"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                echo 'Testing application'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $DOCKER_IMAGE ./backend
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                docker push $DOCKER_IMAGE
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no \
                -i /var/jenkins_home/.ssh/id_rsa \
                youssef@192.168.38.134 "
                    cd ~/production &&
                    docker compose pull &&
                    docker compose up -d
                "
                '''
            }
        }

        stage('Verify') {
            steps {
                sh '''
                curl -f http://192.168.38.134:5000/health
                '''
            }
        }
    }
}
