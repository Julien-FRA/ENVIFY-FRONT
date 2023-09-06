node {
    // Tests
    stage('SCM') {
        checkout scm
    }

    stage('SonarQube Analysis') {
        def nodeHome = tool 'nodejs';
        def scannerHome = tool 'SonarQubeScanner';
        withSonarQubeEnv() {
            sh "${nodeHome}/bin/nodejs"
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
}
