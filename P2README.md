# Take A Hike

## Table of Contents
​
[Front End](#front-end)
​
- [User Experience Design](#user-experience-design)
- [User Interface: Design](#user-interface-design)
- [User Interface: Event Handling](#user-interface-event-handling)
​
[Back End](#back-end)
​
- [Express: Server](#express-server)
- [Express: HTML Routes](#express-html-routes)
- [Express: API Routes](#express-api-routes)
- [Models and Database](#models-and-database)
​
[Dev Ops](#dev-ops)
​
- [Git Maintainer](#git-maintainer)
- [Heroku Builder](#heroku-builder)
​
[Project Management](#project-management)
​
- [Scrum Master](#scrum-master)
​
## Front End
​
### User Experience Design
​
- Tasks
  - establish user interaction flow
  - itemize the user pages
  - create wireframes
  - document user stories
- Technologies and Concepts
  - Who are the users?
  - What is an MVP?
  - User flow diagram
  - Data flow Diagram
  - Wireframing tools
    - Figma
    - miro
    - Adobe XD
    - Pen and Paper
- Related Areas
  - [User Interface Design](#user-interface-design)
    - what are the elements that need graphic design?
​
### User Interface: Design
​
- Tasks
  - Design the look and feel
  - Colors
  - Fonts
  - Layout
  - Identifying what is static and what is data
- Technologies and Concepts
  - Graphic design
    - Figma
    - Sketch
    - miro
    - Adobe XD
    - Photoshop
  - HTML
  - CSS
  - CSS Framework (e.g., Bootstrap, UI Kit)
  - Handlebars
  - Files go in `public` or in `views`
- Related Areas
  - [User Experience Design](#user-experience-design)
    - What are the pages/templates that need to be designed?
  - [User Interface: Event Handling](#user-interface-event-handling)
    - What are the elements that need to be updated or watched?
  - [Express: HTML Routes](#express-html-routes)
    - The HTML routes need to render the `handlebars` files
​
### User Interface: Event Handling
​
- Tasks
  - Identifying interactions in the UI
  - Writing event handlers
  - working with
  - Working with API Routes team member(s) to establish routes, parameters and JSON objects
- Technologies and Concepts
  - Forms
  - Javscript
  - `fetch`
  - Async/Await
  - DOM (document object model)
  - files go in `public`
- Related Areas
  - [User Interface: Design](#user-interface-design)
    - What are the elements that need to be updated or watched?
  - [Express: API Routes](#express-api-routes)
    - What are the routes? (methods and paths)
    - What are the request parameters (if any)?
    - What is in the request body (if anything)?
    - What is in the response?
​
## Back End
​
<a name="server"></a>
​
### Express: Server
​
- Tasks
  - set up and maintain the `server.js` file
  - include in any route files from the Express: HTML Routes and Express: API Routes
  - include the models
  - establish connection to database to sync the models
- Technologies and Concepts
  - Javascript
  - node
  - express
  - MVC
  - file in the root directory
- Related Areas
  - [Express: HTML Routes](#express-html-routes)
    - Include routes
  - [Express: API Routes](#express-api-routes)
    - Include routes
  - [Models and Database](#models-and-database)
    - Include the models
​
### Express: HTML Routes
​
- Tasks
  - Establish what the static pages are
  - Get any data needed in static pages
  - Call any needed 3rd party API's for remote data
  - Render `handlebars` with the data
- Technologies and Concepts
  - Express
  - MVC
  - `handlebars`
  - Sequelize
  - Async/Await
  - try/catch
  - data serialization
  - files in the controllers
- Related Areas
  - [User Interface: Design](#user-interface-design)
    - What are the handlebars files?
    - What data is needed in these files?
  - [Models and Database](#models-and-database)
    - Which data models are needed by each route?
​
### Express: API Routes
​
- Tasks
  - Establish the API routes used by the frontend
  - Get any data needed to return as JSON
  - Call any needed 3rd party API's for remote data
- Technologies and Concepts
  - Express
  - MVC
  - Sequelize
  - Async/Await
  - try/catch
- Related Areas
  - [User Interface: Event Handling](#user-interface-event-handling)
    - What are the routes (methods and paths)?
    - What are the request parameters (if needed)?
    - What is in the request body (if needed)?
    - What is in the response?
  - [Models and Database](#models-and-database)
    - Which data models and queries are needed for each route?
​
<a name="database"></a>
​
### Models and Database
​
- Tasks
  - establish the database schema
  - model the data
    - what are the database tables?
    - what are the fields in each table?
  - write the sequelize models
  - create seed data if needed
  - protect database connection parameters
- Technologies and Concepts
  - MySQL
  - Sequelize
  - MVC
  - `.env`
  - JawsDB (through Heroku)
  - MySQLWorkbench (connect to local and to remote db)
  - files in the `db`, `models` and `seeds` folder
- Related Areas
  - [Express: API Routes](#express-api-routes)
  - [Express: HTML Routes](#express-html-routes)
  - [Heroku Builder](#heroku-builder)
    - what are the JawsDB environment variables?
​
## Dev Ops
​
<a name="git"></a>
​
### Git Maintainer
​
- Tasks
  - establish and maintain a github project
  - share project with team members
  - protect the `main` branch
  - create a `.gitignore` file
  - enforce a git workflow
    - establish feature branches
    - merge pull requests
  - (optional) connect github project main branch to deploy to `heroku`
- Technologies and Concepts
  - `git`
  - `github`
  - `heroku`
- Related Areas
  - [Heroku Builder](#heroku-builder)
    - what is the build process?
  - [Scrum Master](#scrum-master)
    - how often should we build?
    - how often should we make pull requests?
​
<a name="heroku"></a>
​
### Heroku Builder
​
- Tasks
  - establish a `heroku` app
  - add environment variables to the `heroku` app
  - make sure that the `.gitignore` excludes:
    - `node_modules`
    - `.DS_Store`
    - `.env`
  - make sure that the `package.json` has a `start`script
  - add a JawsDB add-on
  - (optional) connect github project main branch to deploy to `heroku`
- Technologies and Concepts
  - `heroku`
  - Environment variables (i.e., taking what is in `.env` and setting the site vars)
  - Github auto deploy
  - JawsDB
- Related Areas
  - [Git Maintainer](#git-maintainer)
​
## Project Management
​
### Scrum Master
​
- Tasks
  - establish a project management system (e.g., a kanban board)
  - establish a Google Doc
  - write issues in the kanban
  - lead standup meetings
  - keep track of assigned issues
  - keep communication open
  - troubleshoot planning
  - schedule meetings
- Technologies and Concepts
  - github issues
  - kanban
  - slack
- Related Areas
  - [Git Maintainer](#git-maintainer)
    - plan and facilitate pull requests
  - [Heroku Builder](#heroku-builder)
    - when should we plan releases?
