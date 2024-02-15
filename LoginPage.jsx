import React from 'react';
import { BiKey } from "react-icons/bi";
import { IoMdLock } from "react-icons/io";
import page from "./page.jpeg";
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="wrapper">
        <form action="">
            <div className='img-banner'>
                <img className='image' src={page}/>
                <h1 className='text'>Welcome Back!</h1>
            <h4 className='word'>Sign in to continue</h4>
            </div>
            <div className="input-box">
                <label>E-mail</label>
                <input type="text"  required/>
            </div>
            <div className="input-box">
                <label>Password</label>     
                <input type="password" required/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me? </label>
                
            </div>

            <button type="submit">Log In</button>

            <div className="side-link">
                <BiKey className='icon'/><a href="#">Login with email</a>
                <IoMdLock  className='icon'/><a href="#">Forgot password?</a>
            </div>

            

            <div className="register-link">
                <p>Don't have an account?<a href='#'>Register Now</a></p>
            </div>
        </form>
    </div>
  );
};

export default LoginPage





// import React from 'react';
import { TextField, Checkbox, Button, FormControlLabel } from '@mui/material';
import { BiKey } from 'react-icons/bi';
import { IoMdLock } from 'react-icons/io';
import page from 'path-to-your-image'; // replace 'path-to-your-image' with the actual path to your image

// const LoginPage = () => {
//   return (
    // <div className="wrapper">
    //   <form action="">
        // <div className='img-banner'>
        //   <img className='image' src={page} alt="Banner"/>
        //   <h1 className='text'>Welcome Back!</h1>
        //   <h4 className='word'>Sign in to continue</h4>
        // </div>
        // <div className="input-box">
        //   <label>E-mail</label>
        //   <TextField type="text" required fullWidth />
        // </div>
        // <div className="input-box">
        //   <label>Password</label>
        //   <TextField type="password" required fullWidth />
        // </div>

        // <div className="remember-forgot">
          {/* <FormControlLabel */}
            // control={<Checkbox />}
            // label="Remember me"
        //   />
        {/* </div> */}

        // <Button type="submit" variant="contained" color="primary">
        //   Log In
        // </Button>

        // <div className="side-link">
        //   <BiKey className='icon'/><a href="#">Login with email</a>
        //   <IoMdLock className='icon'/><a href="#">Forgot password?</a>
        // </div>

        // <div className="register-link">
        //   <p>Don't have an account?<a href='#'>Register Now</a></p>
        // </div>
    //   </form>
    // </div>
//   );
// };

// export default LoginPage;
