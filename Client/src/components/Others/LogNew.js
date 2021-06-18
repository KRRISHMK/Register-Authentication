import React from "react";

import { Grid, Row, Col, Container } from "rsuite";
import { SocialIcon } from "react-social-icons";
import TextField from "@material-ui/core/TextField";
import com from "../../img/com.svg";
import bg2 from "../../img/bg2.png";
import mobile from "../../img/mobile.svg";

const LogNew = () => {
  return (
    <div className="radgrad">
      <img className="radgrad" src={bg2} alt="bg2" />
      <Container>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={12} xsPush={12}>
              <div>
                <img src={com} alt="com" />
              </div>
              <div className="mob">
                <img src={mobile} alt="mobile" />
              </div>
            </Col>

            <Col xs={12} xsPush={12}>
              <div className="divalt3" position="absolute">
                {/* <form noValidate autoComplete="off"> */}
                <br />

                <h2 className="pb-1" color="black" align="center">
                  Register
                </h2>
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
                      color="black"
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
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                      />
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

                <div ClassName="radio">
                  <button class="btn5" bold>
                    {" "}
                    Register{" "}
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
            </Col>
          </Row>
        </Grid>
      </Container>{" "}
    </div>
  );
};

export default LogNew;
