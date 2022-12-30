'use client'
import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebaseClient';

export default function LoginForm() {

  const handleLogin = async () => {
    const email = 'fahad.ahmed@me.com';
    const password = 'Abc$99abc';
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();
    console.log('token', token)
    //verifyUserToken(token);
  }
  return (
    <div>
      <h3>Login</h3>
      <input type="text" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  )
};
