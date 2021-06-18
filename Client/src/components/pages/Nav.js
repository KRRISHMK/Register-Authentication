import React, {useState} from 'react';
import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from "@material-ui/core/TextField";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';

import msk2 from '../../img/msk2.png'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const [open, setOpen] =useState(false);




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
const History= useHistory();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img className="navimg" src={msk2} alt="msk2" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            JOBS
          </Typography>
      
       
         
          <Button color="inherit" onClick={() => History.push('/home')}>Home</Button>
        
          <Button  color="inherit" onClick={handleClickOpen} >ADD</Button>
         
          <Dialog className="dd" disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
          
        <DialogTitle>Add Qualification</DialogTitle>
        <DialogContent>
          <form >

            <FormControl>
            <TextField
                  input="true"
                  required
                  size="small"
                 
                  label="Qualification"
                  variant="outlined"
                  type="text"
                
                  // onChange={(e) => {
                  //   setEmailReg(e.target.value);
                  // }}
                />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions> 
      </Dialog>
     
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Nav;
