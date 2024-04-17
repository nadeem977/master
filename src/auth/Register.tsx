import React, { useState } from 'react'
import Container from '@mui/material/Container'
import "./auth.css"
import Button from '@mui/material/Button'
import isPasswordValid from "./PasswordCheck"
import axios from "axios"
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { API_BASE_URL } from '../Config'
import { Link } from 'react-router-dom'

const Register = () => {

  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [validpaswords, setValidpaswords] = useState<string>("")
  const [validemail , setValidEmail] = useState<string>("")
  const [checkpas, setcheckPas,] = useState<boolean>(false)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();





  const registration = async () => {
    if (!validateEmail(email)) {
      setValidEmail("Please enter a valid email address")
      // enqueueSnackbar("Please enter a valid email address", { variant: "error" });
      return;
    }
    setValidEmail("")
    const Validpwd = isPasswordValid(password)
    if(Validpwd?.valid){
      try {
        const data = {
          username: username,
          email: email,
          password: password
        }
        const res = await axios.post(`${API_BASE_URL}/register`, data)
        console.log(res)
        enqueueSnackbar(res?.data , { variant: "success" });
         setUsername("")
         setUsername("")
         setEmail("")
        navigate("/sign-in")
      } catch (error) {
        console.log(error)
        enqueueSnackbar(error?.response?.data?.message, { variant: "error" });
      }
    }else{
      console.log("error wrong password")
      setValidpaswords(Validpwd?.message)
    }
  }


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  return (
    <>
      <Container maxWidth="xl">
        <div className="main_div_Login">
          <form className='auth_form'>
            <div className='input_div'>
              <small>username</small>
              <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='input_div'>
              <small>Email</small>
              <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
              {validemail && <p className='pwd_sms'>{validemail || validemail}</p>}
            </div>
            <div className='input_div'>
              <small>password</small>
              <div className='show_pass'>
              <input type={`${checkpas ? "text" : "password"}`} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
              <div className='icon_register' onClick={()=>setcheckPas(!checkpas)}>{checkpas ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}</div>
              </div>
             {validpaswords && <p className='pwd_sms'>{validpaswords || validpaswords}</p>}
            </div>
            <Button variant="contained" className='btn_signIn' onClick={registration} disabled={!password || !email || !username}>
              Sign up
            </Button>
            <p>have an account? <Link to="/signIn" className='not_have_account'> Sign in</Link></p>
          </form>
        </div>

      </Container>
    </>
  )
}

export default Register
