
import React, {useState} from "react";
import Axios from "axios";
import { Grid, Row, Col, Container } from "rsuite";
import { SocialIcon } from "react-social-icons";
import TextField from "@material-ui/core/TextField";
import Com from "../../img/com.svg";
import Bg2 from "../../img/bg2.png";
import Mobile from "../../img/mobile.svg";

export default function NewLogin() {

  const [fnameReg, setFnameReg] = useState("");
  const [lnameReg, setLnameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  // const [genderReg, setGenderReg] = useState("");
  const [mobileReg, setMobileReg] = useState("");




  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      firstname: fnameReg,
      lastname: lnameReg,
      password: passwordReg,  
      email: emailReg,
      mobile: mobileReg,
      // gender: genderReg,
    }).then((response) => {
      console.log(response);
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
              <Col className=" pt-2 " xs={12}>
                <TextField
                  required
                  size="small"
                  className="textf"
                  // id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="text"
                  onChange={(e) => {
                    setFnameReg(e.target.value);
                  }}
                />
                <TextField
                  required
                  size="small"
                  // id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  onChange={(e) => {
                    setLnameReg(e.target.value);
                  }}
                />
              </Col>
            </Row>
            <Row className="show-grid pt-3 row1">
              <Col className="pt-1" xs={12}>
                <TextField
                  required
                  size="small"
                  className="textf"
                  // id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
                <TextField
                  required
                  size="small"
                  // id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row className="show-grid pt-3 row1">
              <Col className="pt-1" xs={12}>
                <TextField
                  required
                  size="small"
                  className="textf"
                  // id="outlined-basic"
                  label="Email Id"
                  variant="outlined"
                  type="text"
                  onChange={(e) => {
                    setEmailReg(e.target.value);
                  }}
                />
                <TextField
                  required
                  size="small"
                  // id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  onChange={(e) => {
                    setMobileReg(e.target.value);
                  }}
                />
              </Col>
              <Col className="pt-1" xs={12}>
                <br />
                <div className="radiobt">
                  <input type="radio" id="male" name="gender" value="male" />
                  <label className="lab" htmlFor="male">
                    Male
                  </label>
                  <br />
                  <input
                    type="radio"
                    // id="female"
                    name="gender"
                    value="female"
                    // onChange={(e) => {
                    //   setGenderReg(e.target.value);
                    // }}
                  />
                  <label className="lab" htmlFor="female">
                    Female
                  </label>
                </div>
              </Col>
            </Row>
          </Grid>
        </Container>
        <div className="radio">
          <button onClick={register} className="btn5" bold="true" >
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
};


