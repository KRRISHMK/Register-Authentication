import { CardActionArea, CardContent } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { Grid, Row, Col, Container } from "rsuite";
import Card from "react-animated-3d-card";

import TextField from "@material-ui/core/TextField";

const Main = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const History = useHistory();
  Axios.defaults.withCredentials = true;
  const login = () => {
    Axios.post("http://localhost:3001/login", {
     
      email: email,
   
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log("email");
      } else {
        setLoginStatus(response.data[0].email);
        console.log("pass");
        History.push("/home");
       
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
      }
    });
  }, [History]);

  return (
    <div class="container">
      <div
        style={{
          "--color-1": "navy",
          "--color-2": "deepskyblue",
          background: `
      linear-gradient(
        100deg,
        var(--color-1),
        var(--color-2) 80%
      ) `,
          height: "100%",
          width: "100%",
          position: "fixed",
        }}
      >
        <br />
        <Container>
          <Grid>
            <Row className="show-grid">
              <Col xs={12}>
                <Card
                  style={{
                    backgroundColor: "white",
                    width: "450px",
                    height: "300px",
                    cursor: "pointer",
                    left: "200px",
                    top: "100px",
                  }}
                  onClick={() => console.log("Card clicked")}
                >
                  <CardContent position="absolute">
                    <h1 align="center">Welcome</h1>
                    <h4 align="center">
                      LOOKING FOR GLOBAL EXTENDED TEAM FOR YOUR BUSINESS ?
                    </h4>
                    <h6 align="center">
                      We help tech startups to build their global extended team
                      in Bangalore, India
                    </h6>
                  </CardContent>
                  <CardActionArea className="weltext1">
                    <button
                      class="btn3"
                      onClick={() => History.push("/newlogin")}
                    >
                      Get Started
                    </button>
                  </CardActionArea>
                  <h6 align="right">Don't have an Account ? </h6>
                </Card>
                <br />

                <div className="divalt4" position="absolute">
                  <div className="pr-2">
                    <h2 align="center">LogIn</h2>
                  </div>
                  <Row className="show-grid pt-2 row1">
                    <Col className=" pt-2 " xs={12}>
                      <TextField
                        input="true"
                        required
                        size="small"
                        className="textl"
                        id="outlined-basic"
                        label="Email ID"
                        variant="outlined"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="show-grid pt-3 row1">
                    <Col className=" pt-1 " xs={12}>
                      <TextField
                        input="true"
                        required
                        size="small"
                        className="textl"
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <div className="pt-1">
                        <Link href="#" color="primary">
                          Forgot password?
                        </Link>
                      </div>
                    </Col>
                    <div className="pt-4">
                      <button onClick={login} className="btn9" bold>
                        {" "}
                        Login{" "}
                      </button>
                    </div>{" "}
                    <h6 className="text-red">{loginStatus}</h6>
                  </Row>
                </div>
              </Col>
            </Row>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Main;
