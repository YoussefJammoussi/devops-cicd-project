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

        stage('SonarQube Analysis') {
    steps {
        script {
            def scannerHome = tool 'SonarScanner'
            withSonarQubeEnv('SonarQube') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
        }
    }
}

    stage('Quality Gate') {
      steps {
        timeout(time: 2, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
        }
    }
}

        stage('Test') { steps {
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
        cd ansible
        ansible-playbook -i inventory.ini deploy.yml
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
