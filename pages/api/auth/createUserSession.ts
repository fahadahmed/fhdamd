// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { setCookie } from 'cookies-next';
import admin from '../../../lib/firebaseAdmin';

type Data = {
  message: string;
};

async function getSessionToken(idToken: any) {
  const token = await idToken;
  console.log('authToken', token);
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
      throw new Error('Recent sign in required');
    }
    const twoWeeks = 60 * 60 * 24 * 14 * 1000;
    return admin.auth().createSessionCookie(idToken, { expiresIn: twoWeeks });
  } catch (error: any) {
    throw new Error(error);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = req.body.token;
  const idToken = await getSessionToken(token);

  setCookie('__session', idToken, {
    req,
    res,
    maxAge: 60 * 60 * 24 * 30,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    httpOnly: true,
  });

  res.status(200).json({ message: 'ok' });
}
