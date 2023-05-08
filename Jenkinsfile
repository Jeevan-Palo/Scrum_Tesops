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
        sh 'npx cypress install --force'
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
