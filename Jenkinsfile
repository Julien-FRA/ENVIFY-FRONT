node {
    stage('SCM') {
        checkout scm
    }
    stage('SonarQube Analysis') {
        tools {
            jdk "jdk904"
        }
        def scannerHome = tool 'SonarQubeScanner';
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
}
