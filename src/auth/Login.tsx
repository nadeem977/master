import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import facebookicon from "../assets/facebook.png";
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { useSnackbar } from "notistack";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Cookies from 'js-cookie';
import { API_BASE_URL } from '../Config';
import { jwtDecode } from "jwt-decode";
import { FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPas, setCheckPas] = useState<boolean>(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const loginauth = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      const res = await axios.post(`${API_BASE_URL}/login`, data);
      setPassword("");
      setEmail("");
      if (res && res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        Cookies.set('token', res.data.accessToken);
        enqueueSnackbar("User has been logged in", { variant: "success" });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error?.response?.data, { variant: "error" });
    }
  };

  return (
    <Container maxWidth="xl">
      <div className="main_div_Login">
        <form className='auth_form'>
          <div className='input_div'>
            <small>Email</small>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input_div'>
            <small>Password</small>
            <div className='show_pass'>
              <input type={`${checkPas ? "text" : "password"}`} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
              <div className='icon_register' onClick={() => setCheckPas(!checkPas)}>
                {checkPas ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </div>
            </div>
          </div>
          <Button variant="contained" className='btn_signIn' onClick={loginauth}>
            Sign in
          </Button>
          <GoogleLogin
            onSuccess={credentialResponse => {
              const userData = jwtDecode(credentialResponse.credential);
              console.log(userData);
            }}
            onError={() => { console.log('Google Login Failed'); }}
          />
          {/* <FacebookLoginButton appId="431422379293027" onResolve={(response)=>{console.log(response)}} onError={(error)=>{console.log(error)}}/> */}
          <Button variant="contained" className='btn_signIn'>
            <img src={facebookicon} alt="facebook" width={17} /> &nbsp;&nbsp; Continue with Facebook
          </Button>
          <p>Don't have an account? <Link to="/signUp" className='not_have_account'> Sign Up</Link></p>
        </form>
      </div>
    </Container>
  );
};

export default Login;
