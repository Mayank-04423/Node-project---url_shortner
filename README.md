# Node.js URL Shortener API with Server-Side Rendering (SSR)

A full-stack URL shortener application built using Node.js, Express, and MongoDB. The project supports dynamic short ID generation, automatic URL redirection, real-time analytics tracking (click counts and timestamps), and a server-side rendered dashboard UI using EJS templates.

## Features

* **URL Shortening:** Generates a unique short ID for any submitted URL string.
* **Redirection Engine:** Resolves incoming short IDs and redirects the browser client to the corresponding original destination URL.
* **Analytics Tracker:** Counts total visits and logs individual interaction timestamps inside a database array.
* **Server-Side Rendering:** Uses EJS templates to render HTML views dynamically from the server.
* **Form Processing:** Utilizes URL-encoded middleware to handle standard HTML form submissions seamlessly.

## Project Architecture

The application follows the Model-View-Controller (MVC) pattern:

```
├── controller/        # Contains application logic and handler functions
├── models/            # Mongoose schemas for MongoDB document mapping
├── routes/            # Network endpoints separating views and API requests
├── views/             # EJS layout files for the frontend interface
├── connection.js      # Script to initialize the MongoDB database connection
├── index.js           # Main server configuration and initialization entry point
├── .gitignore         # Prevents node_modules/ and system files from entering Git
└── package.json       # Manages dependencies and operational execution scripts
```

## Project Architecture

The application follows the Model-View-Controller (MVC) pattern:

Tech Stack & Dependencies
Runtime: Node.js

Framework: Express.js

Database Object Modeling (ODM): MongoDB via Mongoose

Template Engine: EJS (Embedded JavaScript)

ID Generation Library: shortid

Installation & Setup
Follow these commands to configure and execute the application locally:

1. Clone the Repository: 
git clone [https://github.com/Mayank-04423/Node-project---url_shortner.git](https://github.com/Mayank-04423/Node-project---url_shortner.git) cd Node-project---url_shortner

3. Install Dependencies: 
npm install

4. Database Execution:
Ensure a local MongoDB server instance is active on your host engine at port 27017.

5. Execute Server
Run the startup script configured within your package file:   npm start
The console interface will report connected to mongoDb followed by server started at port : 8001.

Application Routes

Front-End Views (SSR)
GET / - Renders the dashboard landing page containing the primary URL shortener input form and the cumulative analytics data table.

API & Redirection Interfaces
POST /url - Receives form data containing the target URL, stores the record in MongoDB, and re-renders the viewport to showcase the new link.

GET /:shortId - Redirects any browser client hitting the endpoint to the matching RedirectURL destination while appending a timestamp metric to the history logs.

GET /url/analytics/:shortId - Serves a raw JSON payload indicating the numerical click summary and historical interaction arrays for the target link.
