import React from 'react'
import { Grid, Row, Col, Dropdown  } from 'rsuite';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



import jb1 from '../../img/jb1.jpg'
import jb2 from '../../img/jb2.jpg'
import jb3 from '../../img/jb3.jpg'
import jb4 from '../../img/jb4.jpg'

import { Card } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
  },
});
const Home = () => {
  const classes = useStyles();
  const History= useHistory();
  return (
    <div className="jobimg"> 
    <img
      src={jb2}
      height="250"
      alt="jb3" />
      <div className="grid1" >
 <Grid fluid>
 <Row className="show-grid pt-21">
      <Col xs={12}>
      <Card   style={{
            backgroundColor: "white",
            width: "450px",
            height: "300px",
            cursor: "pointer",
        
          }}>
      <CardActionArea className="card1clr">
        <CardMedia
          className={classes.media}
          image={jb1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React Js Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Experience: Fresher
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => History.push('/jobs')}>
        Apply
        </Button>
        <Button size="small" color="primary" >
          Learn More
        </Button>
      </CardActions>
    </Card>

      </Col>
      </Row>
      <Row className="show-grid pt-21">
      <Col xs={12}>
      <Card   style={{
            backgroundColor: "white",
            width: "450px",
            height: "300px",
            cursor: "pointer",
        
          }}>
      <CardActionArea className="card1clr">
        <CardMedia
          className={classes.media}
          image={jb3}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Node JS Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Experience: Fresher
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => History.push('/jobs')}>
        Apply
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </Col>
    </Row>
    <Row className="show-grid pt-21">
      <Col xs={12}>
      <Card   style={{
            backgroundColor: "white",
            width: "450px",
            height: "300px",
            cursor: "pointer",
        
          }}>
      <CardActionArea className="card1clr">
        <CardMedia
          className={classes.media}
          image={jb4}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            UI/UX Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Experience: Fresher
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => History.push('/jobs')}>
        Apply
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </Col>
    </Row>
    <Row className="show-grid pt-21">
      <Col xs={12}>
      <Card   style={{
            backgroundColor: "white",
            width: "450px",
            height: "300px",
            cursor: "pointer",
        
          }}>
      <CardActionArea className="card1clr">
        <CardMedia
          className={classes.media}
          image={jb2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Software Tester
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Experience: Fresher
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => History.push('/jobs')}>
          Apply
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      </Col>
    </Row>
 </Grid>

 </div>
    </div> 
  )
}

export default Home
