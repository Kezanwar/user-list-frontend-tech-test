This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

It is suggested to run below commands with Node.js v14+.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run mock-server`

This uses the json-server package (https://github.com/typicode/json-server) to run a mock server available locally at `https://localhost:3001`

- modify `/jsonserver/db.json` for the data structure of your endpoint
- modify `/jsonserver/routes.json` to add specific routes

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
