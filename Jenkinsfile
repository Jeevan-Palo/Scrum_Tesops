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
  }
}
