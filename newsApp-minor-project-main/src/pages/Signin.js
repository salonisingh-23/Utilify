import React, { useContext, useState, useRef } from 'react'
import {
    Container,
    Button,
    Card,
} from "reactstrap"

import firebase from "firebase/compat/app";
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';
import { toast } from "react-toastify";
import Link from '@mui/material/Link';
import auth from '../config/firebaseConfig'
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import GoogleButton from 'react-google-button'
import '../Signin.css';

const Signin = () => {

    const context = useContext(UserContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleSignup = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
                context.setUser({ email: res.user.email, uid: res.user.uid })
            })
            .catch(error => {
                console.log(error);
                toast(error.message, {
                    closeOnClick: true,
                    pauseOnHover: true,
                    autoClose: 2000,
                    type: "error"
                });
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSignup()
    }

    const signInWithGoogle = () => {
        const google_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(google_provider)
            .then(res => {
                console.log(res);
                context.setUser({ email: res.user.email, uid: res.user.uid })
                toast("Here you go✌🏻",
                    { type: "success" }
                );
            })
            .catch(error => {
                console.log(error);
                toast("Oops.. Email already exists",
                    { type: "error" }
                );
            })
    }

    if (context.user?.uid) {
        return <Redirect to="/main" />
    }

    return (
        <div className='signin min-vh-100 position-relative'>
            <div className='img-overlay position-absolute w-100 h-100'>
                <Container component="main" maxWidth="xs" >

                    <Box
                        sx={{
                            paddingTop: 40,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                    
                        }}
                    >
                        {/* <Card style={{ padding: '32px', borderRadius: '8px' }} className="text-center" bg='light' border="primary">
                            <center>
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                            </center>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    ref={emailRef}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus


                                />
                                <TextField
                                    ref={passwordRef}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <br />
                                <Button
                                    onClick={signIn}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <br />
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Box>
                        </Card> */}

                        <br />
                        <GoogleButton className='mx-auto' id="google-button" label='Sign in with Google' onClick={signInWithGoogle} />
                        <br />
                                <Link href="/signup" style={{color: "black"}} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                    </Box>
                </Container>
            </div>
        </div>
    );

}

export default Signin
