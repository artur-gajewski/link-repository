#!/bin/bash

usage() {
	cat <<EOF
Usage: $(basename $0) <command>
	Local:
		run-backend			Start Spring Boot application.
		run-client			Start React application.
	Docker:
		build-backend		Build the Spring Boot API backend container.
		start-backend		Start API.
		build-client		Build the React application container.
		start-client		Start client.
EOF
	exit 1
}

CMD="$1"
shift
case "$CMD" in
	run-backend)
		cd backend && mvn spring-boot:run
	;;
	build-backend)
		cd backend && mvn install dockerfile:build
	;;
	start-backend)
		cd backend && docker run -d -p 8080:8080 -t backend/internet-link-repository
	;;
	run-client)
		cd client && yarn start
	;;
	build-client)
		cd client && docker image build -t client/internet-link-repository .
	;;
	start-client)
		cd client && docker container run -d -p 3000:3000 -it client/internet-link-repository
	;;
	*)
		usage
	;;
esac
