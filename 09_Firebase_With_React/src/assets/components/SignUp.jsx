import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword, db, doc, setDoc } from "./Firebase";
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const createUserAccount = async () => {
    try {
      // Create a user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // Set user document in Firestore
      const userDocRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        name: formData.name,
        email: formData.email,
      });

      console.log("Successfully Created Account!");
      alert("Successfully Created Account!");

      // Reset form data
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      console.error("Error adding document: ", error.message);
      alert(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    createUserAccount();
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleValue}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleValue}
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Create Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleValue}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleValue}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
            Do you have an account? <a href="/signin">Sign In</a>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default SignUp;
