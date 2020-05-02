 FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN yarn
RUN yarn cache clean

# Bundle app source
COPY . .

# Expose volume for nodemon
VOLUME /usr/src/app

# Expose port 3000
EXPOSE 3000

# Define environment variables
ENV TZ America/Sao_Paulo
ENV LANG pt_BR.UTF-8
ENV LANGUAGE pt_BR.UTF-8
ENV LC_ALL pt_BR.UTF-8

# Finally, start the app
CMD [ "yarn", "start" ]