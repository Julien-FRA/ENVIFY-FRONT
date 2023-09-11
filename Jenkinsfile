pipeline {
    tools { nodejs "nodejs" }

    agent any
    stages {
        stage('Git') {
            steps {
                git 'https://github.com/Envify-School-Project/ENVIFY-FRONT'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test:types'
                sh 'npm run test:lint'
                sh 'npm run test:unit'
            }
        }
        stage('Logs') {
            steps {
                script {
                    echo "Jenkins Pipeline Details :"
                    def consoleLog = Jenkins.getInstance().getItemByFullName(env.JOB_NAME).getBuildByNumber(Integer.parseInt(env.BUILD_NUMBER)).logFile.text
                    echo "${consoleLog}"
                }
            }
        }
    }
}

node {
    stage('SCM') {
        checkout scm
    }

    stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarQubeScanner';
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
}
