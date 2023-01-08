'use client'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebaseClient';
import { redirect } from 'next/navigation';

export default function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const token = await user.getIdToken();
    const res = await fetch(`api/auth/createUserSession`, {
      method: 'POST',
      body: JSON.stringify({ token, redirectTo: '/admin' }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 200) {
      setLoggedIn(true);
    }
  }

  if (loggedIn) {
    redirect('/admin');
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
};
