import React from "react";
import {
  Grid,
  Row,
  Col,
  Container,

} from "rsuite";

// import Employee from './pages/Employee';

import TextField from "@material-ui/core/TextField";
import mask from "../img/msk2.png";

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
        <div className="weltext4">
          <img src={mask} alt="mask" />
          <h1 bold color="white">
            Welcome
          </h1>

          <i color="color:rgba(255, 255, 255, 0.747)" style={{ opacity: 0.5 }}>
            Welcome the challenges.
            <p style={{ opacity: 0.5 }}>
              Look for the opportunities in every situation
            </p>
            to learn and grow in wisdom.
          </i>
        </div>
        <button class="btn">Login</button>

        <div>
          <br />

          <div className="divalt" position="fixed">
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
           
                  <Row className="  row1">
                  <Col className=" pt-1 " xs={12}>
                <br />
                <div className="radiobt">
                  <input type="radio" id="male" name="gender" value="male" />
                  <label className="lab" for="male">
                    Male
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label className="lab" for="female">
                    Female
                  </label>
                </div>
              </Col>
                  </Row>
               
              </Grid>
            </Container>

            <div ClassName="radio">
              <button class="btn1" bold>
                {" "}
                Register{" "}
              </button>
            </div>

            {/* </form> */}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Main;
