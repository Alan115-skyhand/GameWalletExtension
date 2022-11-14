/*global chrome*/
import { Box, Button, Input, TextField, Typography } from '@mui/material';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '~/context/AuthProvider';
import './auth.scss';

const Forgot = () => {
  const [password, setPassword] = useState('');
  const { authed, signIn } = useAuth();
  const navigate = useNavigate();

  const handlePasswordChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Box sx={{ backgroundColor: '#17181b', textAlign: 'center', marginTop: '8rem' }}>
      <Typography
        variant='h3'
        component={'article'}
        fontWeight='bold'
        marginTop={2}
        marginBottom={8}
      >
        Forgot Password
      </Typography>
      <Typography variant='h5' component={'article'} fontWeight='bold' color='grey'>
        Please input your email and verification code
      </Typography>
      <Box mt={3} sx={{ backgroundColor: '#202328', borderRadius: '20px', padding: '5rem 3rem' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <Input
            className='pw-input'
            sx={{ color: 'white', width: '80%', fontSize: 12, marginTop: '0' }}
            size='medium'
            placeholder='Your email'
            value={password}
            onChange={handlePasswordChange}
            disableUnderline
          />
          <Button
            className='login-btn'
            variant='contained'
            sx={{
              borderRadius: '10px',
              width: '70px',
              height: '34px',
              backgroundColor: '#aaaaaa !important',
              fontFamily: 'Arial Bold, Arial, sans-serif',
              fontWeight: 'bold !important',
              fontStyle: 'normal',
              fontSize: '14px',
              textTransform: 'unset',
            }}
            onClick={() => {}}
          >
            Resend
          </Button>
        </Box>
        <Input
          className='pw-input'
          sx={{ color: 'white', fontSize: 12 }}
          size='medium'
          placeholder='Your email'
          value={password}
          onChange={handlePasswordChange}
          disableUnderline
        />
        <Button
          className='login-btn'
          sx={{ marginTop: '5rem' }}
          variant='contained'
          onClick={() => {}}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default Forgot;