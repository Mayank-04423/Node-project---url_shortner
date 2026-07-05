# Node.js URL Shortener API with Server-Side Rendering (SSR)

A full-stack URL shortener application built using Node.js, Express, and MongoDB. The project supports dynamic short ID generation, automatic URL redirection, real-time analytics tracking (click counts and timestamps), and a server-side rendered dashboard UI using EJS templates.

## Features

* **URL Shortening:** Generates a unique short ID for any submitted URL string.
* **Redirection Engine:** Resolves incoming short IDs and redirects the browser client to the corresponding original destination URL.
* **Analytics Tracker:** Counts total visits and logs individual interaction timestamps inside a database array.
* **Server-Side Rendering:** Uses EJS templates to render HTML views dynamically from the server.
* **Form Processing:** Utilizes URL-encoded middleware to handle standard HTML form submissions seamlessly.

---

## Project Architecture

The application follows the Model-View-Controller (MVC) pattern:

```text
├── controller/        # Contains application logic and handler functions
├── models/            # Mongoose schemas for MongoDB document mapping
├── routes/            # Network endpoints separating views and API requests
├── views/             # EJS layout files for the frontend interface
├── connection.js      # Script to initialize the MongoDB database connection
├── index.js           # Main server configuration and initialization entry point
├── .gitignore         # Prevents node_modules/ and system files from entering Git
└── package.json       # Manages dependencies and operational execution scripts
