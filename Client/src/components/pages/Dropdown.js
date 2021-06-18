import React, { useState, useEffect } from "react";
import Axios from "axios";

import TextField from "@material-ui/core/TextField";
import {button}from "rsuite";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const arrays = [];
const Dropdownn = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/drop", {}).then((result) => {
      if (result) {
        
        console.log(result["data"]);
        for (let i = 0; i < result["data"].length; i++) {
          arrays.push(result["data"][i].dropdow);
        }
        <select id='template-select'>
        <arrays>----</arrays>
        {arrays.map(array => <array key={array} value={array}>{array}</array>)}
      </select>
      } else {
        console.log("error");
      }
    });
  }, []);

  const [dropb, setDropdownb] = useState("");
  const [menu, setMenu] = useState([]);
  let arr = [];
  const drop = () => {
    Axios.post("http://localhost:3001/drop", {
      dropdownb: dropb,
    }).then((result) => {
      if (result) {
        console.log(result["data"]);
        for (let i = 0; i < result["data"].length; i++) {
          arrays.push(result["data"][i].dropdow);
          console.log(arr);
        }

        setMenu(arr);
      } else {
        console.log("error");
      }
    });
  };

  return (
    <div>
              <select id='template-select'>
        <arrays>----</arrays>
        {arrays.map(array => <array key={array} value={array}>{array}</array>)}
      </select>
      <div className="dropdata">

        <TextField
          input="true"
          id="outlined-size-small"
          label="Add Data"
          size="small"
          variant="outlined"
          onChange={(e) => {
            setDropdownb(e.target.value);
          }}
        />

        <button className="bt" onClick={drop}>
          ADD
        </button>
        <h3> result</h3>
        {menu.map(function (menudata, index) {
          return(
<p>{menudata}</p>
          )
            
          
          
        })}
      </div>

      <Button
        className="dd"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Data
      </Button>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
       
           {menu.map(function (menudata, index) {
             
          return(
<ListItemText primary={menudata}/>
          )
            
          
          
        })} 
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default Dropdownn;
