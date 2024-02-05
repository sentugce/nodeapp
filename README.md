# nodeapp

This repository contains a user management application developed using PostgreSQL as the database and Node.js.

<h2>Features</h2>
<ul>
  <li>Adding new users,</li>
  <li>Deleting existing users,</li>
  <li>Updating user information,</li>
  <li>Functionality to list users and view their details.</li>
</ul>
  
This project leverages the capabilities of Node.js along with PostgreSQL database to perform fundamental user management functions.

<h2>Getting Started</h2>

  ```bash
  git clone https://github.com/sentugce/nodeapp.git
  cd nodeapp
  ```

2-Please note: This project requires PostgreSQL database access. \
  You'll need to create and add a username and password for accessing the 'db.js' file. Please create this file and include the necessary information to establish database access after its creation

3-The DB_CONNECTION_STRING example in the .env file represents the connection string required to connect to a real PostgreSQL database. The parts 'your_username,' 'your_password,' and 'your_database' in this connection string should be replaced with the actual database username, password, and database name.
```bash
DB_CONNECTION_STRING=postgresql://your_username:your_password@localhost:5432/your_database
```

4-Then, install the project dependencies:
```bash
npm install
```

5-Run the development server:
  ```bash 
npm start
```
  
Open http://localhost:5000 with your browser to see the result.
