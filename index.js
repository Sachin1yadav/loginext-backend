const jsonServer = require("json-server");
const server = jsonServer.create();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// Specify the path to your db.json file
const dbPath = "db.json";

// Create a lowdb instance and use the FileSync adapter
const adapter = new FileSync(dbPath);
const db = low(adapter);

// Initialize your database with an empty state if it doesn't exist
db.defaults({}).write();

// Specify the JSON Server router
const router = jsonServer.router(dbPath);

// Specify the middlewares
const middlewares = jsonServer.defaults();

// Specify the port
const port = process.env.PORT || 3001;

// Use the middlewares
server.use(middlewares);

// Use the JSON Server router
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(JSON Server is running on port ${port});
});
