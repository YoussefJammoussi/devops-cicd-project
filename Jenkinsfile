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

        stage('Build') {
            steps {
                echo 'Docker build stage prepared'
            }
        }

    }
}
