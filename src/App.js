import React, { useState }from 'react';
import {  Grid, TextField, Button, Card, CardContent, Typography} from '@mui/material';
//import { number } from 'yup';

// Rest of your code...
const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Log the form details to the console
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);

  };
//function App() {


  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        React-Form
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" onChange={(e) => setFirstName(e.target.value)}variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name"  onChange={(e) => setLastName(e.target.value)}variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email"onChange={(e) => setEmail(e.target.value)} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="PhoneNumber"onChange={(e) => setPhoneNumber(e.target.value)} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" onChange={(e) => setMessage(e.target.value)}variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" onSubmit={handleSubmit} variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>


              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );

  };

export default Form;
