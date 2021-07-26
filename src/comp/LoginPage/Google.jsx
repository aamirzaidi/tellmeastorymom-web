import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function GoogleLoginbutton(props){
    const classes = useStyles();
    return (
        <Button 
        onClick = {props.onClick} 
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      ><div className="row">
    <center>  <FontAwesomeIcon  icon={faGoogle} /></center>
        <div className="googleSpace"/>
        Sign In With Google
        </div>
      </Button>
    );
}

export default GoogleLoginbutton;