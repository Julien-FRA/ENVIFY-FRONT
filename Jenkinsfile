node {
    def jdkHome = tool 'jdk11'
    echo "jdkHome var: ${jdkHome}"
    sh "ls ${jdkHome}"
    //env.JAVA_HOME = jdkHome
    //env.PATH = "${jdkHome}/bin"

    stage('SCM') {
        checkout scm
    }

    stage('Log') {
        sh "ls ${jdkHome}/bin"
        sh "cd ${jdkHome}"
    }

    stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarQubeScanner';
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
}
