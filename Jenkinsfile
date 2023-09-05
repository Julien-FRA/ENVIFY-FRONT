node {
    def jdkHome = tool 'jdk11'
    env.JAVA_HOME = jdkHome
    env.PATH = "${jdkHome}/bin"

    stage('SCM') {
        checkout scm
    }

    stage('Log') {
        sh "ls ${jdkHome}/bin"
        sh "cd ${jdkHome}"
    }
}
