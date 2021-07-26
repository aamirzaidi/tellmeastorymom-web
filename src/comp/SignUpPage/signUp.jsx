import React, {useRef, useState} from 'react';
import { Form, Alert , FormGroup, FormLabel, FormControl} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import logo from "../../images/logo.jpg"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useAuth} from "../FirebaseAuthService/AuthContext";
import { useHistory } from 'react-router-dom';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const {signup} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault(); //Prevents form from refreshing

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Passwords do not match!');
    }
    
    try{
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    }catch {
      setError('Failed to create account!')
    }

    setLoading(false);
  }
  
  const classes = useStyles();

  return (

    <>   
    <div className="login-padding login-outline">
    <Container  component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
       
      <img className="logo" src={logo} height="80" width="80"/>
       
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error && <Alert variant="danger">{error}</Alert> }
        <Form onSubmit={handleSubmit} className={classes.form} >      
              <FormGroup id = "email">
                <FormLabel>Email</FormLabel>
                <FormControl type ="email" ref = {emailRef} required />
              </FormGroup>
              <FormGroup id = "password">
                <FormLabel>Password</FormLabel>
                <FormControl type ="password" ref = {passwordRef} required />
              </FormGroup>
              <FormGroup id = "confirm-password">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl type ="password" ref = {passwordConfirmRef} required />
              </FormGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled = {loading}>
            Sign Up
          </Button>
            <Link href="/login" variant="body2">
                Already have an account? Sign in
            </Link>
        </Form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
    </div>
  </>
  );
}

export default SignUp;