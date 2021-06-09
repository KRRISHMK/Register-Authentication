import React from "react";
import vector from "../../img/vecor.svg";
import { Grid, Row, Col, Container, Icon } from "rsuite";
import { SocialIcon } from "react-social-icons";
import TextField from "@material-ui/core/TextField";
import mask from "../../img/msk2.png";

const LoginNew = () => {
  return (
    <>
      <div className="bg-black-02">
        <div className="bg1">
          <div className="vector">
            <div className="curve">
              <div className="weltext">
                <img className="pb-2" src={mask} alt="mask" />
                <h2 className="pb-2">Welcome</h2>
              </div>
              <img className="imgvector" src={vector} alt="vector" />
            </div>

            <br />
          </div>
        </div>
        <div className="divalt3" position="absolute">
          {/* <form noValidate autoComplete="off"> */}
          <br />
          <Container>
            <Grid>
              <h2 className="pb-1" color="black" align="center">
                Register
              </h2>
              <Row className="show-grid pt-2 row1" color="black">
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
                <Col className=" pt-1 " xs={12}>
                  <br />
                  <div className="radiobt">
                    <input type="radio" />
                    <label>Male</label>
                    <input type="radio" />
                    <label>Female</label>
                  </div>{" "}
                </Col>
              </Row>
            </Grid>
          </Container>
          <div ClassName="radio">
            <button class="btn5" bold>
              {" "}
              Register{" "}
            </button>

            <button class="btn8" bold>
              {" "}
              Log-In{" "}
            </button>
            <div className="iconsocial">
              <h5 className="signintext">or Sign in with</h5>
              <SocialIcon
                className="socialicon1"
                url="https://twitter.com/jaketrent"
              />
              <SocialIcon
                className="socialicon1"
                url="https://linkedin.com/in/jaketrent"
              />
              <SocialIcon
                className="socialicon1"
                url="https://facebook.com/in/jaketrent"
              />
              <SocialIcon
                className="socialicon1"
                url="https://google.com/in/jaketrent"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginNew;
