import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import { TextField, Checkbox, Button,Link,Typography, FormControlLabel, Paper } from '@mui/material';
import '@fontsource/inter/400.css';
import Bannerimage from './Image/img.jpeg';
import IconButton from '@mui/material/IconButton';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import './LoginPage.css';

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Paper elevation={3} className="wrapper">
      {/* Wrap your form with Formik */}
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className='img-banner'>
            <img className='image' src={Bannerimage} />
            <Typography variant="h3" className='text'>Welcome Back!</Typography>
            <Typography variant="h4" className='word'>Sign in to continue</Typography>
          </div>

          <div className="input-box">
            <label>Email</label>
            {/* Use Field component from Formik with TextField */}
            <Field type="text" name="email" as={TextField} required />
          </div>

          <div className="input-box">
            <label>Password</label>
            {/* Use Field component from Formik with TextField */}
            <Field type="password" name="password" as={TextField} required />
          </div>

          <div className="remember-forgot">
            <FormControlLabel
              control={<Field type="checkbox" name="rememberMe" as={Checkbox} />}
              label="Remember me?"
            />
          </div>

          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>

          <div className="side-link">
            <Link href="#">
                <IconButton>
                    <VpnKeyIcon />
                     Login with email
                    </IconButton>
                </Link>
            <Link href="#">
                < IconButton>
                    <LockIcon/>
                    Forgot password?
                </IconButton>
            </Link>
          </div>

          <div className="register-link">
            <Typography variant="body1">
              Don't have an account?<Link href='#'>Register Now</Link>
            </Typography>
          </div>
        </Form>
      </Formik>
    </Paper>
  );
};

export default LoginPage;
