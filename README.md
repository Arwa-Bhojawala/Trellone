# Trellone


A Trello Clone - Built with React, Redux, Express, and MongoDB.

## ⚡ Features
- Create, Modify and Delete boards
- Create, Modify and Delete cards
- Create, Modify and Delete lists
- Move card items within lists
- Move card items across lists
- Ordering of list items
- Activity log with active timestamps for each user events
- Customize background images or color for individual boards
- User Authentication

## Installing
1. Clone the repository
```
git clone https://github.com/Arwa-Bhojawala/Trellone.git
cd Trellone
```
2. Install dependencies
```
npm i && cd client && npm i
```
3. Create .env file (Pushed to github for the time being.)
```
REACT_APP_CLIENT_KEY="YOUR API KEY" // Unsplash API Key
```
4. Create dev.env for **development** and **test.env** for testing purpose (Pushed dev.env to github for the time being.)
```
cd ../config
(
echo PORT=1313
echo DATABASE_URL="MongoDB Connection String"
echo JWT_SECRET="YOUR JWT TOKEN (Can be any string)"
echo NODE_ENV=development
) > dev.env
```
6. Run the project
```
npm run trellone
```

## Built With
#### Frontend 
- [React](https://reactjs.org/) -  A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - State management
- [Material UI](https://material-ui.com/) - UI
- [React-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - Accessible drag and drop for lists
- [React Router](https://reactrouter.com/) - Routing library for react
- [Moment](https://momentjs.com/) - Library for manipulating dates and time 
- [lodash](https://lodash.com/) - JavaScript utility library for modularity, performance, etc.
#### Backend 
- [NodeJs](https://nodejs.org/en/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - Mongodb object modeling for node.js
- [Express](https://expressjs.com/) -  Node.js web application framework
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [Jsonwebtoken](https://jwt.io/) - Decode, verify and generate JWT.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Password hashing algorithm library
- [Supertest](https://www.npmjs.com/package/supertest) - HTTP APIs Testing library
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [sinon](https://sinonjs.org/) - Standalone test fakes, spies, stubs and mocks library
