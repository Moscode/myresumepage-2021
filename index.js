const express = require("express");
const nodemailer = require("nodemailer")

const app = express();

//Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res)=>{
	res.sendFile(__dirname + "/public/resumepage.html");
})

app.post("/", (req, res)=>{
	console.log(req.body);

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "odunoshomoses27@gmail.com",
			pass: "adewale10",
		},
		tls:{
			rejectUnauthorized: false
		}
	})

	let mailOptions = {
		from: req.body.email,
		to: "odunoshomoses27@gmail.com",
		subject: `Message from ${req.body.email}: ${req.body.subject}`,
		text: req.body.message
	}

	transporter.sendMail(mailOptions, (error, info) =>{
		if(error){
			console.log(error);
			res.send("error");
		}else{
			console.log("Email sent " + info.response)
			res.send("success");
		}
	})
})

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));