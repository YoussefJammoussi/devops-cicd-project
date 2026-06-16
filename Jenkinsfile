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
        sshagent(['vm2-ssh-key']) {
            sh '''
            ssh -o StrictHostKeyChecking=no youssef@192.168.38.134 "
            cd ~/production &&
            sudo docker compose pull &&
            sudo docker compose up -d
            "
            '''
        }
    }
}

        stage('Verify') {
            steps {
                sh 'curl -f http://192.168.38.134:5000'
            }
        }

    }
}
