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
                sh 'curl -f http://192.168.38.134:5000'
            }
        }

    }
}
