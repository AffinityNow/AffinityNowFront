FROM node:14
ENV NODEHOME=/home/node
COPY --chown=node:node . $NODEHOME/app/
WORKDIR $NODEHOME/app
RUN npm install
EXPOSE 4200
CMD ["npm", "start"]