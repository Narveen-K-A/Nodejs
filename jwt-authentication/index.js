const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

dotenv.config();

let PORT = 3000;

app.post("/user/generateToken", (req, res) => {
	// Validate User Here
	// Then generate JWT Token

	let jwtSecretKey = process.env.JWT_SECRET_KEY;
	let data = {
		time: Date(),
		userId: 12,
	}

	const token = jwt.sign(data, jwtSecretKey);

	res.json({token});

});

app.get("/user/validateToken", (req, res) => {
	// Tokens are generally passed in the header of the request
	// Due to security reasons.

	let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
	let jwtSecretKey = process.env.JWT_SECRET_KEY;

	try {
		const token = req.header(tokenHeaderKey);

		const verified = jwt.verify(token, jwtSecretKey);
		if(verified){
			return res.send("Successfully Verified");
		}else{
			// Access Denied
			return res.status(401).send(error);
		}
	} catch (error) {
		// Access Denied
		return res.status(401).send(error);
	}
});

/* verifyToken = (req, res, next) => { res.header( "Access-Control-Allow-Headers", "*" );

let token = req.headers["authorization"];

if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  
  const bearerToken = token.split(' ')[1];  

  jwt.verify(bearerToken, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized Token!" });
    }
    req.userId = decoded.id;
    req.token = token;
    next();
  });
}; */

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT} ...`);
});



