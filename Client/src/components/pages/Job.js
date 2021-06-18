import React, { useState } from "react";
import Axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import FormControl from "@material-ui/core/FormControl";
import { Container, FlexboxGrid, Button, Alert} from "rsuite";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Nav from "./Nav";

import Dialog from "@material-ui/core/Dialog";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import Home from "./Home";
const fileInputTypes = ".pdf, .txt";
const fileInputType = ".png, .jpeg, .jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Job = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [firstnameb, setFirstnameb] = useState("");
  const [lastnameb, setLastnameb] = useState("");
  const [mobileb, setMobileb] = useState("");
  const [emailb, setEmailb] = useState("");
  const [ageb, setAgeb] = useState("");
  const [genderb, setGenderb] = useState("");
  const [maritalb, setMaritalb] = useState("");
  const [educationb, setEducationb] = useState("");
  const [designationb, setDesignationb] = useState("");
  const [cvb, setCv] = useState("");
  const [picb, setPic] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [marry, setMarry] = useState("");
  const [qualification, setQualification] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    setAgeb(event.target.value);
  };
  const handleChange1 = (event) => {
    setGender(event.target.value);
    setGenderb(event.target.value);
  };
  const handleChange2 = (event) => {
    setMarry(event.target.value);
    setMaritalb(event.target.value);
  };
  const handleChange3 = (event) => {
    setQualification(event.target.value);
    setEducationb(event.target.value);
  };
  const biodata = () => {
    Axios.post("http://localhost:3001/biodata", {
      firstname: firstnameb,
      lastname: lastnameb,
      mobile: mobileb,
      email: emailb,
      age: ageb,
      gender: genderb,
      marital: maritalb,
      education: educationb,
      designation: designationb,
      cv: cvb,
      picture: picb,
    }).then((response) => {

      if (response.data.message) {
        setLoginStatus(response.data.message);
        console.log("email");
        Alert.error('Something Went wrong',4000);
      
      } else {
        
        Alert.info('Successfully Sent',4000);
      }
    });
  };

  return (
    <div>
      <div >
      <Nav />
      </div>
      <div className="show-fake-browser navbar-page1 d-flex justify-content-between align-items-center">
        <Container className={classes.root} noValidate autoComplete="off">
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={4}>
              <TextField
                input="true"
                id="standard-textarea"
                label="First Name"
                placeholder="Enter Your First Name"
                multiline
                onChange={(e) => {
                  setFirstnameb(e.target.value);
                }}
              />
              <TextField
                input="true"
                id="standard-textarea"
                label="Last Name"
                placeholder="Enter Your Last Name"
                multiline
                onChange={(e) => {
                  setLastnameb(e.target.value);
                }}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>
              <TextField
                input="true"
                id="standard-textarea"
                label="Mobile Number"
                placeholder="Enter Your Number"
                multiline
                onChange={(e) => {
                  setMobileb(e.target.value);
                }}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>
              <TextField
                input="true"
                id="standard-textarea"
                label="Email Address"
                placeholder="Enter Your Email"
                multiline
                onChange={(e) => {
                  setEmailb(e.target.value);
                }}
              />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4} className="flex1">
              <FormControl className="formcon">
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={age}
                  onChange={handleChange}
                  inputProps={{
                    name: "age",
                    id: "age-native-simple",
                  }}
                >
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={23}>22</MenuItem>
                  <MenuItem value={24}>23</MenuItem>
                  <MenuItem value={25}>24</MenuItem>
                  <MenuItem value={22}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                  <MenuItem value={32}>32</MenuItem>
                  <MenuItem value={33}>33</MenuItem>
                  <MenuItem value={34}>34</MenuItem>
                  <MenuItem value={35}>35</MenuItem>
                  <MenuItem value={36}>36</MenuItem>
                  <MenuItem value={37}>37</MenuItem>
                  <MenuItem value={38}>38</MenuItem>
                </Select>
              </FormControl>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4} className="flex1">
              <FormControl className="formcon">
                <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={gender}
                  onChange={handleChange1}
                  inputProps={{
                    name: "gender",
                    id: "age-native-simple",
                  }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">
                    Other
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl className="formcon1">
                <InputLabel htmlFor="age-native-simple">
                  Marital Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={marry}
                  onChange={handleChange2}
                  inputProps={{
                    name: "marital",
                    id: "age-native-simple",
                  }}
                >
                  <MenuItem value="Single">Single</MenuItem>
                  <MenuItem value="Married">Married</MenuItem>
                  <MenuItem value="Divorced">Divorced</MenuItem>
                  <MenuItem value="Widowed">Widowed</MenuItem>
                </Select>
              </FormControl>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4} className="flex1">
              <FormControl className="formcon">
                <InputLabel htmlFor="age-native-simple">
                  Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  value={qualification}
                  onChange={handleChange3}
                  inputProps={{
                    name: "qualification",
                    id: "age-native-simple",
                  }}
                >
                  <MenuItem value="B.E / B.Tech">B.E / B.Tech</MenuItem>
                  <MenuItem value="M.Sc">M.Sc</MenuItem>
                  <MenuItem value="MCA">MCA</MenuItem>
                </Select>
                </FormControl>
              <TextField
                input="true"
                className="desig"
                id="standard-textarea"
                label="Designation"
                placeholder="Enter Your Designation"
                multiline
                onChange={(e) => {
                  setDesignationb(e.target.value);
                }}
              />
              
            </FlexboxGrid.Item>
            
            <FlexboxGrid.Item colspan={4}>
            <h6 className="cv">Upload CV</h6>
              <input
                className="btn17"
                type="file"
                name="CV"
                accept={fileInputTypes}
                onChange={(e) => {
                  setCv(e.target.value);
                }}
              />
            <h6 className="cv1">Upload Image</h6>
            <input
                className="btn18"
                type="file"
                name="CV"
                accept={fileInputType}
                onChange={(e) => {
                  setPic(e.target.value);
                }}
              />
            </FlexboxGrid.Item>
          </FlexboxGrid>{" "}
          <div className="infotxt">
                <h6 className="text-red">{loginStatus}</h6>
              </div>
        </Container>
      </div>
      <Button className="btn15" onClick={biodata}>
        Submit
      </Button>
      <Button
        className="px-0 btn16"
        appearance="primary"
        onClick={handleClickOpen}
      >
        View
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Resume
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Card className="rescard">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <div>
                  <h3>
                    Name: {firstnameb}
                    {lastnameb}
                  </h3>
                  <h3>Email: {emailb} </h3>
                  <h3>Mobile: {mobileb} </h3>
                  <h3>Age: {ageb} </h3>
                  <h3>Gender: {genderb} </h3>
                  <h3>Qualification: {educationb} </h3>
                  <h3>Designation: {designationb} </h3>
                  <h3>Marital Status: {maritalb} </h3>
                </div>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={biodata}>
                Submit
              </Button>
              <Button size="small" color="primary">
                Download
              </Button>
            </CardActions>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

export default Job;
