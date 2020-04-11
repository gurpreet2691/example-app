node {
	def app
	
	stage('Clone Repository') {
		checkout scm 
	}

	stage('Buid Image') {
		app = docker.build('gurpreet2691/example-app')
	}

	stage('Push Image') {
		docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
			app.push('latest')
		}
	}
}

