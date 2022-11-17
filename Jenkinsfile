pipeline {
    agent {
        docker {
            image 'artilleryio/artillery-engine-playwright:latest'
            args '-u root:root -i --entrypoint='
        }
    }

    triggers {
        cron('0 0 * * *')
    }

    stages {
        stage('Load Test') {
            steps {
                sh 'mkdir reports'
                sh '/home/node/artillery/bin/artillery run --output reports/report.json artillery/loadWww.yml'
                sh '/home/node/artillery/bin/artillery report --output reports/report reports/report.json'
            }
        }
    }

    post {
        success {
            archiveArtifacts 'reports/*'
        }
    }
}