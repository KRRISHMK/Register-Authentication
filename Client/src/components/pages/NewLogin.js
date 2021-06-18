import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { Grid, Row, Col, Container } from "rsuite";
import { SocialIcon } from "react-social-icons";
import TextField from "@material-ui/core/TextField";
import Com from "../../img/com.svg";
import Bg2 from "../../img/bg2.png";
import Mobile from "../../img/mobile.svg";

export default function NewLogin() {
  const History = useHistory();
  const [fnameReg, setFnameReg] = useState("");
  const [lnameReg, setLnameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [cpasswordReg, setCPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [genderReg, setGenderReg] = useState("");
  const [mobileReg, setMobileReg] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      firstname: fnameReg,
      lastname: lnameReg,
      password: passwordReg,
      cpassword: cpasswordReg,
      email: emailReg,
      mobile: mobileReg,
      gender: genderReg,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log("email");
      } else {
        History.push("/home");
      }
    });
  };

  return (
    <div className="radgrad">
      <img className="radgrad" src={Bg2} alt="bg2" />
      <div>
        <img src={Com} alt="com" />
      </div>
      <div className="mob">
        <img src={Mobile} alt="mobile" />
      </div>
      <div className="divalt3" position="absolute">
        <br />
        <Container>
          <Grid>
            <h2 className="pb-1" color="black" align="center">
              Register
            </h2>
            <Row className="show-grid pt-2 row1">
              <Col xs={12}>
                <TextField
                  input="true"
                  required
                  size="small"
                  className="textf"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  helperText="Min 3 character"
                  onChange={(e) => {
                    setFnameReg(e.target.value);
                  }}
                />
                <TextField
                  input="true"
                  required
                  size="small"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  helperText="Min 3 character"
                  onChange={(e) => {
                    setLnameReg(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="show-grid pt-3 row1">
              <Col xs={12}>
                <TextField
                  input="true"
                  size="small"
                  className="textf"
                  label="Password"
                  variant="outlined"
                  type="password"
                  helperText="Min 8 Character"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
                <TextField
                  input="true"
                  required
                  size="small"
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  helperText="Same as Password"
                  onChange={(e) => {
                    setCPasswordReg(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="show-grid pt-3 row1">
              <Col xs={12}>
                <TextField
                  input="true"
                  required
                  size="small"
                  className="textf"
                  label="Email Id"
                  variant="outlined"
                  type="text"
                  helperText="Must contain Valid email"
                  onChange={(e) => {
                    setEmailReg(e.target.value);
                  }}
                />
                <TextField
                  input="true"
                  required
                  size="small"
                  label="Mobile Number"
                  variant="outlined"
                  helperText="Enter Valid Number"
                  onChange={(e) => {
                    setMobileReg(e.target.value);
                  }}
                />
              </Col>
              <Col className="pt-1" xs={12}>
                <br />
                <div
                  onChange={(e) => {
                    setGenderReg(e.target.value);
                  }}
                  className="radiobt"
                >
                  <input type="radio" name="gender" value="male" />
                  <label className="lab" htmlFor="male">
                    Male
                  </label>
                  <input type="radio" name="gender" value="female" />
                  <label className="lab" htmlFor="female">
                    Female
                  </label>
                </div>
              </Col>
            </Row>
          </Grid>
        </Container>
        F
        <div className="infotxt">
          <h6 className="text-red">{loginStatus}</h6>
        </div>
        <div className="radio">
          <button onClick={register} className="btn5" bold="true">
            {" "}
            Register{" "}
          </button>
        </div>
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
  );
}
