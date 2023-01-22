// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Data = {
  issue: string;
};

const db = admin.firestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = req.body.name;
  const description = req.body.description;

  try {
    const response = await db.collection('issues').add({ name, description });
    res.status(200).json({ issue: response.id });
  } catch (error: any) {
    throw new Error(error);
  }
}
