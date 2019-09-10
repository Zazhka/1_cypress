pipeline {
    agent any

    stages {
        stage('build') {
            steps{
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
                stage('Run tests in parallel A'){
                    steps{
                        bat 'npx cypress run --record --key 0f067619-f1d0-4ce3-b02d-b8c4a1e13702 --parallel'
                    }
                }
                stage('Run tests in parallel B'){
                    steps{
                        bat 'npx cypress run --record --key 0f067619-f1d0-4ce3-b02d-b8c4a1e13702 --parallel'
                    }
                }
            }
        }
    }
}