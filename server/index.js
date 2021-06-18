const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const fileUpload = require("express-fileupload")
const morgan = require("morgan")

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
require("dotenv").config();

const nodemailer = require("nodemailer");
const log = console.log;
const saltRounds = 10;

const app = express();

app.use(fileUpload({
  createParentPath: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
var sessionStore = new MySQLStore();
app.use(
  session({
    key: "userId",
    secret: "users",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "loginsystem",
});

app.post("/register", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const password = req.body.password;
  const cpassword = req.body.cpassword;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const gender = req.body.gender;

  const Validator = require("input-field-validator");

  const validation = new Validator(req.body, {
    firstname: ["minlength:3"],
    lastname: ["minlength:3"],
    email: ["email", "lowercase"],
    password: ["minlength:8"],
    cpassword: ["same:password"],
    mobile: ["maxlength:10"],
    gender: ["in:male,female"],
  });

  if (!validation.validate()) {
    console.log("error on field");
    console.log(validation.errors.join("<br/>"));
    const error = validation.errors.join("<br/>");
    res.send({ message: error });
  } else {
    db.query(
      "SELECT COUNT(*) AS cnt FROM users WHERE email = ? ",
      req.body.email,
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          if (data[0].cnt > 0) {
            console.log("emailAlready exist");
            res.send({ message: "Email Already exist Please Login" });
          } else {
            db.query(
              "INSERT INTO users (firstname, lastname, password, cpassword, email, mobile, gender) VALUES (?,?,?,?,?,?,?)",
              [firstname, lastname, password, cpassword, email, mobile, gender],
              function (err, insert) {
                if (err) {
                  console.log("summa" + err);
                } else {
                  res.send({ signed: true });
                }
              }
            );
          }
        }
      }
    );
  }
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    console.log("mkk");
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    console.log("mk");
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  console.log("mk0");
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?;", email, (err, result) => {
    if (err) {
      console.log("mk1");
      res.send({ err: err });
    }
    console.log(result);
    if (result.length > 0) {
      console.log("mk2");
      if (password === result[0].password) {
        console.log("mk3");
        console.log("mk2");
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination!" });
      }
    } else {
      res.send({ message: "User doesn't exist" });
    }
  });
});
app.post("/biodata", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const age = req.body.age;
  const gender = req.body.gender;
  const marital = req.body.marital;
  const education = req.body.education;
  const designation = req.body.designation;
  const cv = req.body.cv;
  
  const picture=req.body.picture;
 
  db.query(
    "SELECT COUNT(*) AS cnt FROM biodata WHERE email = ? ",
    req.body.email,
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        if (data[0].cnt > 0) {
          console.log("emailAlready exist");
          res.send({ message: "Email Already exist Please Login" });
        } else {
          db.query(
            "INSERT INTO biodata (firstname, lastname, mobile, email, age, gender, marital, education, designation, cv, picture) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
            [
              firstname,
              lastname,
              mobile,
              email,
              age,
              gender,
              marital,
              education,
              designation,
              cv,
              picture,
            ],
            function (err, insert) {
              if (err) {
                console.log("summa" + err);
              } else {
                let transporter = nodemailer.createTransport({
                  service: "gmail",
                  auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                  },
                });

                let mailOptions = {
                  from: req.body.email,
                  to: "raspberrypi2021alexa@gmail.com",
                  subject: "Apply for a",
                  text: `Name:  ${req.body.firstname}  ${req.body.lastname} 
                  \n Email: ${req.body.email} 
                  \n Mobile: ${req.body.mobile}
                  \n Age: ${req.body.age}
                  \n Gender: ${req.body.gender}
                  \n Marital Status: ${req.body.marital} 
                  \n Qualification: ${req.body.education}
                  \n Designation: ${req.body.designation}
                  \n CV: ${req.body.cv},
                  \n picture: ${req.body.picture}`,
                  attachments: [
                    {
                        // filename: '.pdf',
                       
                        cid: `${req.body.cv}`
                        
                    }
                ]
                };

                transporter.sendMail(mailOptions, (err, data) => {
                  if (err) {
                    return log("Error occurs" + err);
                    return log(err);
                  }
                  return log("Email sent!!!");
                });
                res.send({ signed: true });
              }
            }
          );
        }
      }
    }
  );
});
app.post("/drop", (req, res) => {
  const dropdownb = req.body.dropdownb;
  db.query(
    "INSERT INTO dropdown (dropdow) VALUES (?)",
    [
      dropdownb,
    ],
    function (err, insert) {
      if (err) {
        console.log("summa" + err);
      } else {
        console.log("summa" );

    db.query("SELECT dropdow FROM dropdown", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
}}
  )});
  app.get("/drop", (req, res) => {
  db.query("SELECT dropdow FROM dropdown", function (err, result,inserts, fields) {
    if (err) throw err;
   
    res.send(result);
    
  });
});


app.listen(3001, () => {
  console.log("running server");
});
