import './App.css';

import { useForm } from "react-hook-form";
import { Input, CustomButton } from './component';
import { TextField, Button } from "@mui/material";
import { useRef } from 'react';

function App() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = useRef({});
  password.current = watch("password", "")
  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data));
  }

  return (
    <div className="App">

      <div className='form-container'>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            sx={{ marginBottom: "20px" }}
            fullWidth
            label="Username"
            error={!!errors.username}
            variant="outlined"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required"
              }
            })}
            helperText={errors.username && errors.username.message}
          />
          <TextField
            sx={{ marginBottom: "20px" }}
            fullWidth
            label="Email"
            error={!!errors.email}
            variant="outlined"
            {...register("email", {
              required: {
                value: true,
                message: "Email Address is required"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            sx={{ marginBottom: "20px" }}
            fullWidth
            label="Password"
            error={!!errors.password}
            variant="outlined"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required"
              },
              minLength: {
                value: 8,
                message: "Password must be 8 charaters long"
              }
            })}
            helperText={errors.password && errors.password.message}
          />
          <TextField
            sx={{ marginBottom: "20px" }}
            fullWidth
            label="Confirm Password"
            error={!!errors.confirmPassword}
            variant="outlined"
            type="password"
            {...register("confirmPassword", {
              validate: value =>
                value === password.current || "The passwords do not match"
            })}
            helperText={errors.confirmPassword && errors.confirmPassword.message}
          />
          <Button variant="contained" type="submit" fullWidth size="large">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
