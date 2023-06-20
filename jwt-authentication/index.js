const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

dotenv.config();

let PORT = 3000;

app.post("/user/generateToken", (req, res) => {

	let jwtSecretKey = process.env.JWT_SECRET_KEY;
	let data = {
		time: Date(),
		userId: 12,
	}

	const token = jwt.sign(data, jwtSecretKey);

	res.json({token});

});

app.get("/user/validateToken", (req, res) => {

	let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
	let jwtSecretKey = process.env.JWT_SECRET_KEY;

	try {
		const token = req.header(tokenHeaderKey);

		const verified = jwt.verify(token, jwtSecretKey);
		if(verified){
			return res.send("Successfully Verified");
		}else{
			return res.status(401).send(error);
		}
	} catch (error) {
		return res.status(401).send(error);
	}
});

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
});



