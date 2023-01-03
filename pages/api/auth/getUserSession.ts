// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Data = {
  user?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = req.body.token;
  if (token) {
    try {
      const tokenUser = await admin
        .auth()
        .verifySessionCookie(token?.value, true);
      res.status(200).json({ user: tokenUser });
    } catch (error) {
      console.log('There is no authenticated user', error);
      res.status(403).json({ user: null });
    }
  }
  res.status(403).json({ user: null });
}
