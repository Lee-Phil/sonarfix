# Schedule Me

Schedule-Me is a client-server web application, created to help nurses and organizations schedule and optimize their work shifts.

The project is a NestJs/React app and is deployed using Netlify. The project database is hosted on AWS (Amazon Web Service).

The team is supported by Dr. Chun Wang, professor at Concordia University.

## Table of Contents

- [Team Members](#team-members)
- [How to Contribute](#how-to-contribute)
- [Troubleshooting](#troubleshooting)
- [Development Guidelines](#development-guidelines)
- [Development Setup](#development-setup)
- [Tech Stack](#tech-stack)
- [Source](#source)

## Team Members

- Mimi Ta, [@mimi-ta](https://github.com/mimi-ta) (Team Lead)
- Daniel Baggs, [@DanielWill-Baggs](https://github.com/DanielWill-Baggs)
- Georgia Bardaklis, [@gbardaklis](https://github.com/gbardaklis)
- Vincent Bruzzese, [@Sirlacksalot](https://github.com/Sirlacksalot)
- Philippe Lee, [@Lee-Phil](https://github.com/Lee-Phil)
- Nareg Mouradian, [@naregschoolwork](https://github.com/naregschoolwork)
- Christopher Pereira, [@cpereira00](https://github.com/cpereira00)
- Lina Tran, [@linatran1](https://github.com/linatran1)

## How to Contribute

Wondering where to start? You're in the right place!

The following sections will tell you everything you need to know about running the project and testing your changes.
So, if it is your first time here, you may want to buckle up because we have a lot to cover.

### Some prerequisites

Make sure that you have the proper .env files!
You should have one in the client for the frontend URL string, and you should have another one in your prisma folder. Contact a team member for the specific files you need.

### Workflow (not necessarily in order)

This section describes the general workflow that would entail when contributing to this project. For more in-depth instructions, please read the [Step-by-step Guide](#step-by-step-guide).

1. [Running the client](#how-to-start-the-client-app) to visualize the UI
2. [Running the server](#how-to-start-the-backend-app) to run the app logic and Swagger
3. [Viewing/Testing the Prisma database](#prisma)
4. [Testing/Visualizing API with Swagger UI](#swagger-ui-for-api-testing)
5. [Running tests](#testing)
6. [Linting your code](#linting), i.e. formatting it nicely

### Step-by-step Guide

### How to start the Client app

1. Run the following command in the terminal in order to navigate to the server directory: `cd client`
2. Ensure that there is a `.env` file included in the client folder. If not, locate the according file in the teams repository. It contains the url string needed. Create a new file in the directory called `.env` and paste the url string.
3. Run `npm install` and `npm run dev` in the terminal and wait for the react server to run and open by itself.

### How to start the Backend app

1. Run the following command in the terminal in order to navigate to the server directory: `cd server`
2. Run the main NodeJS application file: `npm install`
3. Run the following command to start the server `npm run start:dev`
4. To view the running server, visit http://localhost:3000

### Prisma

Steps to using Prisma on your local machine:

1. Navigate to the `server` directory on the projects path.
2. Ensure that there is a `.env` file included in the prisma folder. If not, locate the according file in the teams repository. It contains the connection string needed. Create a new file in the directory called `.env` and paste the connection string.
3. In the server directory generate the prisma client using `npx prisma generate`.

If there are any new schemas and seed data that needs to be updated, follow the steps above, as well as following these next steps:

4. Delete the migrations folder located in the prisma directory.
5. Generate a new prisma client as in step 3.
6. Run the migration command `npx prisma migrate dev --name "init"`

In order to visualize the database, run `npx prisma studio` in the server directory. It is highly suggested to run this in a new terminal.

`npx prisma db pull`
This commands reads the DATABASE_URL environment variable that's defined in .env and connects to your database.

`npx prisma generate`
The .prisma/client folder contains your generated Prisma client, and is modified each time you change the schema and run the following command:
This command reads your Prisma schema and generates your Prisma Client library

Run this to run code:
`npx ts-node src/index.ts`

### Swagger UI for API Testing

1. Run the Backend app as described previously.
2. Navigate to http://localhost:4000/apimap on your browser.
3. Play around with the different API calls.

### Testing

#### Generating tests using Playwright's inspector

1. Make sure you have playwright installed in your client directory: `npm install`.
2. Create a new file in `client/e2e_tests`.
3. Start the React (and NodeJs if necessary) app as previously described.
4. In a separate tab, open another terminal and run `npx playwright codegen http://localhost:3000`.
5. Record your test case and copy the Playwright Test code into the new file you created in step 1.
6. Run the test (see next section in README) to make sure that your tests work.

#### How to run end-to-end tests (using Playwright)

1. Both the back-end (NodeJS) and the front-end (React) must be running for playwright to function. Open 3 terminals
2. First Terminal (Front-end): `cd client` , `npm install`, `npm run dev`
3. Second Terminal (Back-end) : `cd server` , `npm install`, `npm run start:dev`
4. Third Terminal (Playwright) : Run the following command in the terminal in order to navigate to the client directory: `cd client`.
5. Third Terminal (Playwright) : Run `npx playwright test` to run all tests.
6. Third Terminal (Playwright) : Run `npx playwright test test.ts` to run an individual test.

#### How to run backend tests

You have two options! You can either

1. Run `npm test` in your terminal.
2. Or, you can use your VScode IDE's built in play/debug buttons (read all about it [here](https://github.com/mimi-ta/schedule-me/pull/80#issue-1430914323)!)

run `npx jest --coverage` to get the coverage on the entire project.

### Linting

#### How to apply Prettier to every file in the current directory

`npx prettier --write .` or alternatively, download the vscode extension and add `,"editor.defaultFormatter": "esbenp.prettier-vscode"` to your settings.json file to use prettier on-save shortcut.

`npm install` must be ran in the terminal in the base directory of the project. i.e: C:\..\..\..\schedule-me. Once completed, prettier will be ran after every commit.

## Troubleshooting

If you still have problems running the aforementioned client and server, it is possible that your Node and Npm versions are outdated. Node versions should be above v16.0.0, while npm should be above v8.0.0.

To check the version of node installed locally, open a command terminal in administrator mode. Run the commad `node -v`. If the verison is below the threshold stated above, go on the node website, and download the latest stable verion. Once the program has finished running, it will ahve replaced the existing verion on your system with the newest one.

To check the npm version installed locally, please run the comman `npm -v`. If the version if below the threshold as stated above run the commands `npm install -g npm-windows-upgrade`, followed by `npm-windows-upgrade`.

## Development Guidelines

The development of the applications follows the agile work flow. This includes sprints and releases. Following the requirements of SOEN 490, this includes three sprints, due evey three weeks, as well as three releases.

## Development Setup

All developers and team members are expected to have and use GitHub to transfer and work on code. From there, all members are free to chose their desired IDE. The recommended option is Visual Studio Code.

## Tech Stack

The enitre tech stack can be viewed in the packahe.json files linked with the project. There are three total. The first one is linked to the Client (front end) This will indicate the packages and dependencies of our client. The same can be said of the package.json found in the server (backend) as well as for the entirety of the project.

Running the command `npm install` in the terminal at each path is a must when starting work on any new branch. This ensures the packages are both up-to-date, as well as installed locally.

## Source

The application is using a MIT license. The software is open source code, free licensed software. The source code open to any modification to suit anyones need.
