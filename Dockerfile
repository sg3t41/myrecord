FROM node:22-alpine3.19

RUN apk update && \
	apk upgrade && \
	apk add --no-cache \
	git

WORKDIR /workspac

COPY . .

RUN npm i
