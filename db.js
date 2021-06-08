const mysql = require("mysql");
//create a connection
const config = mysql.createConnection({
  host: "localhost",
  user: "sunny",
  password: "Sunnyshah@123",
  database: "smilysh",
});
//connect
config.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

module.exports = config;
