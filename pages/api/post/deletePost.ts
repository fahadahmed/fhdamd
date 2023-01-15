// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const id = req.body.id;
  const db = admin.firestore();
  const result = await db.collection('posts').doc(id).delete();
  console.log(result);
  res.status(200).json({ name: 'John Doe' });
}
