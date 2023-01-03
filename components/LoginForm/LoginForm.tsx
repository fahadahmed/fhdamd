'use client'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebaseClient';
import { redirect } from 'next/navigation';

export default function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    const email = 'fahad.ahmed@me.com';
    const password = 'Abc$99abc';
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();
    const res = await fetch(`api/auth/createUserSession`, {
      method: 'POST',
      body: JSON.stringify({ token, redirectTo: '/admin' }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(await res.json());
    if (res.status === 200) {
      setLoggedIn(true);
    }
  }

  if (loggedIn) {
    redirect('/admin');
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
