pipeline {
  agent {
    docker {
      image 'cypress/base'
    }
  }

  stages {
    stage('Build and Test') {

      steps {
        // sh 'npm ci'
        // sh "npm run test:ci:record"
        sh 'npm install'
        sh 'npm install --save-dev cypress'
        sh '.\node_modules\.bin\cypress.cmd install'
        sh 'npx cypress run'
      }
    }
    stage('Report'){
      steps{
        publishHTML([
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: '/cypress/reports',
        reportFiles: 'index.html',
        reportName: 'HTML Report', 
        reportTitles: ''])
      }
    }
  }
}
