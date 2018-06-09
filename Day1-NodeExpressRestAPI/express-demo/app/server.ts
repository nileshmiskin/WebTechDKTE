// Import everything from express and assign it to the express variable
import express from 'express';

// Import WelcomeController from controllers entry point
import {WelcomeController, CarController} from './controllers';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: string = process.env.PORT || '3000';

// Mount the WelcomeController at the /welcome route
app.use(express.json());
app.use('/welcome', WelcomeController);
app.use('/cars', CarController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});