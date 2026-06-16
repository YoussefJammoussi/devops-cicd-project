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
                sh 'docker build -t app-backend ./backend'
            }
        }

    }
}
