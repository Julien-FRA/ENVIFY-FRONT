node {
    def jdkHome = tool 'jdk904'
    env.JAVA_HOME = jdkHome
    env.PATH = "${jdkHome}/bin:${env.PATH}"

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
