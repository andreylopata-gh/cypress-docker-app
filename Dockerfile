FROM cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1
WORKDIR /e2e

COPY ./package.json .
COPY ./tsconfig.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress

RUN npm i && npx cypress info

ENTRYPOINT ["npx", "cypress", "run"]
