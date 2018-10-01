FROM alpine
LABEL maintainer="MC"
RUN apk add --update nodejs nodejs-npm
COPY app.js /src/
COPY package.json /src/
WORKDIR /src
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "node", "app.js" ]
