node {
    checkout scm
    def dockerfile = 'Dockerfile'
    def customImage = docker.build("docker-jenkins-pipeline:${env.BUILD_ID}", "-f ${dockerfile} .")
}
pipeline {
    agent any

    triggers {
        cron('0 0 * * *')
    }

    stages {
        stage('Load Test') {
            steps {
                sh 'mkdir reports'
                sh 'artillery run -o report/reportWww.json artillery/loadWww.yml'
                sh 'artillery report --output report/report report/reportWww.json'
            }
        }
    }

    post {
        success {
            archiveArtifacts 'reports/*'
        }
    }
}