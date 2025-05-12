import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import FormInput from './FormInput';
import Btn from './Btn';

export default function Form() {
  const [formData, setFormData] = React.useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/.netlify/functions/sendEmail.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      sx={{
        width: {
          xs: '100%',
          sm: '40%',
          md: '40%',
        },
        marginTop: {
          xs: '20px',
          sm: '0',
        },
      }}
    >
      <Stack direction="row" mb={2} justifyContent="space-between" gap={1}>
          <FormInput
          label="Name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        
        <FormInput
          label="Email"
          name="user_email"
          type="email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
      </Stack>

      <TextField
        name="message"
        label="Message"
        id="message"
        multiline
        minRows={10}
        required
        value={formData.message}
        onChange={handleChange}
        sx={{
          width: '100%',
          backgroundColor: 'rgba(57, 62, 70, 0.5)',
          marginBottom: '20px',
        }}
      />

      <Btn text="Send message" type="submit" bcolor="#00ADB5" />
    </Box>
  );
}

/*
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import FormInput from './FormInput';
import Btn from './Btn';

export default function Form() {
  
  return (
    <Box
      component="form"
      action="https://formspree.io/f/mzzrvqnp" 
      method="POST"
      noValidate
      autoComplete="off"
      sx={{
        width: {
          xs: '100%',
          sm: '40%',
          md: '40%',
        },
        marginTop: {
          xs: '20px',
          sm: '0',
        },
      }}
    >
      <Stack direction="row" mb={2} justifyContent="space-between" gap={1}>
        <FormInput label="Name" name="user_name" required />
        <FormInput label="Email" name="user_email" type="email" required />
      </Stack>

      <TextField
        name="message"
        label="Message"
        id="message"
        multiline
        minRows={10}
        required
        sx={{
          width: '100%',
          backgroundColor: 'rgba(57, 62, 70, 0.5)',
          marginBottom: '20px',
        }}
      />

      <Btn text="Send message" type="submit" bcolor="#00ADB5" />
    </Box>
  );
}

*/