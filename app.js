const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3306;

const db = mysql.createConnection({
  host: '3306',
  user: 'admin',
  password: 'root',
  database: 'project',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(bodyParser.json());

app.post('/auth', (req, res) => {
  const { username, password } = req.body;

  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const user = results[0];
        res.json({
          name: user.name,
          phone: user.phone,
          address: user.address,
        });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});