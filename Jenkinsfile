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
                sh '/home/node/artillery/bin/artillery run --output report/report.json tests/loadWww.yml'
                sh '/home/node/artillery/bin/artillery report --output report/report report/report.json'
            }
        }
    }

    post {
        success {
            archiveArtifacts 'reports/*'
        }
    }
}