pipeline {
    agent any

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
                cd backend
                docker build -t youssef42/app-backend:v1 .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                docker push youssef42/app-backend:v1
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

        stage('Verify Health') {
            steps {
                sh '''
                sleep 10
                curl -f http://192.168.38.134:5000/health
                '''
            }
        }

    }
}
