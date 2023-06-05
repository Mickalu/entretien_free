FROM node:16.10.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn install
RUN yarn add react-scripts

# add app
COPY . ./

# start app
CMD ["yarn", "start"]