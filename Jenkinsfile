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
        sh 'npx cypress run'
      }
    }
    stage {
        publishHTML([
        allowMissing: false,
        alwaysLinkToLastBuild: false,
        keepAll: true,
        reportDir: 'cypress/cypress/reports/html',
        reportFiles: 'index.html',
        reportName: 'HTML Report', 
        reportTitles: ''])
    }
  }
}
