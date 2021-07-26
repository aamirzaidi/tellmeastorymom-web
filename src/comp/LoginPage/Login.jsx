import React, { useState, useRef } from 'react';
import { useAuth } from "../FirebaseAuthService/AuthContext";
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLoginbutton from './Google';
import { Form, Alert, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import logo from "../../images/logo.jpg"
function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const { currentUser, googleSignIn, logout } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault(); //Prevents form from refreshing

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError('Failed to Login!')
    }

    setLoading(false);
  }

  async function handleGoogleSignIn() {
    await googleSignIn().then(() => {
      history.push("/");
    });
  }

  async function handleLogout() {
    await logout().then(() => {
      history.push("/");
    });
  }

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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <>
    
    <div className="login-padding login-outline">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>

          <img className="logo" src={logo} height="80" width="80" />

          {currentUser ?
            <div>
              <Typography component="h1" variant="h5">
                Already Signed In!
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading}
                onClick={handleLogout}
              >
                Log Out!
              </Button>
            </div>
            :
            <div>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit} className={classes.form} noValidate>
                <FormGroup id="email">
                  <FormLabel>Email</FormLabel>
                  <FormControl type="email" ref={emailRef} required />
                </FormGroup>
                <FormGroup id="password">
                  <FormLabel>Password</FormLabel>
                  <FormControl type="password" ref={passwordRef} required />
                </FormGroup>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={loading}
                >
                  Sign In
                </Button>
                <Link href="/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Form>
              <center> <h5 >OR</h5></center>
              <GoogleLoginbutton
                onClick={handleGoogleSignIn}
              />
            </div>}
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
    </>
  );
}

export default Login;