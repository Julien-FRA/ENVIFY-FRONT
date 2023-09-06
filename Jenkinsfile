node {
    // Tests
    stage('SCM') {
        checkout scm
    }

    stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarQubeScanner';
        def nodeHome = tool 'nodejs';
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
            sh "${nodeHome}/bin/node"
        }
    }
}
