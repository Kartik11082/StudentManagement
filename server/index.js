const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors({"origin": "*"}));
app.use(express.json());

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'abc456',
	database: 'kit22aug22'
});

app.post("/create", (req, res) => {
	let rno = req.body.rno;
	let name = req.body.name;
	let marks = req.body.marks;

	let data = [rno, name, marks];
	let sql = "INSERT INTO student VALUES(?, ?, ?)";
	conn.query(sql, data, (err, result) => {
		if (err) {
			res.send(err);
		}
		else {
			res.send(result);
		}
	});
});

const server = app.listen(9000, () => {
	console.log("Server runnging at port 9000");
});
