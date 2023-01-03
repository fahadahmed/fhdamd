// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../lib/firebaseClient';
import { signOut } from 'firebase/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await signOut(auth);
  res.setHeader(
    'Set-Cookie',
    '__session=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  );
  res.send({});
}
