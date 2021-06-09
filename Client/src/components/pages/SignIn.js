import { CardActionArea, CardContent } from "@material-ui/core";
import React from "react";
import {
    Grid,
    Row,
    Col,
    Container,
    Radio,
    RadioGroup,
    FormGroup,
  } from "rsuite";
import Card from "react-animated-3d-card";

import TextField from "@material-ui/core/TextField";
// import Employee from './pages/Employee';

import log from "../../img/log.png";

const Main = () => {
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
              We help tech startups to build their global extended team in
              Bangalore, India
            </h6>
          </CardContent>
          <CardActionArea className="weltext1">
            <button class="btn3">Get Started</button>
          </CardActionArea>
          <h6 align="right">Alredy have a Account ? </h6>
        </Card>
        <br/>
        <div className="home3" >
          <img src={log} alt="log" />
        </div>
      </div>
 
      <div
      >
       

          <div className="divalt1" position="absolute">
            {/* <form noValidate autoComplete="off"> */}

            <Container>
              <Grid>
                <h2 align="center">Register</h2>
                <Row className="show-grid pt-2 row1">
                  <Col className=" pt-2 " xs={12}>
                    <TextField
                      required
                      size="small"
                      className="textf"
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                    />
                    <TextField
                      required
                      size="small"
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                    />
                  </Col>
                </Row>
                <Row className="show-grid pt-3 row1">
                  <Col className=" pt-1 " xs={12}>
                    <TextField
                      required
                      size="small"
                      className="textf"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                    />
                    <TextField
                      required
                      size="small"
                      id="outlined-basic"
                      label="Confirm Password"
                      variant="outlined"
                    />
                  </Col>
                </Row>
                <Row className="show-grid pt-3 row1">
                  <Col className=" pt-1 " xs={12}>
                    <TextField
                      required
                      size="small"
                      className="textf"
                      id="outlined-basic"
                      label="Email Id"
                      variant="outlined"
                    />
                    <TextField
                      required
                      size="small"
                      id="outlined-basic"
                      label="Mobile Number"
                      variant="outlined"
                    />
                  </Col>
                </Row>
                <div class="container">
                  <Row className="  row1">
                    <Col xs={12}>
                      <FormGroup controlId="radioList">
                        <RadioGroup name="radioList" row>
                          <Radio value="A">Male</Radio>
                          <Radio value="B">Female</Radio>
                        </RadioGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Grid>
            </Container>

            <div ClassName="radio">
              <button class="btn4" bold>
                {" "}
                Register{" "}
              </button>
            </div>

            {/* </form> */}
          </div>
          <br />
        </div>
      </div>


    
  );
};

export default Main;
