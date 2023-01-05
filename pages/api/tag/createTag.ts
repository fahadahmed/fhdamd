// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Data = {
  tag: string;
};

const db = admin.firestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const label = req.body.label;
  const description = req.body.description;

  try {
    const response = await db.collection('tags').add({ label, description });
    console.log(response.id);
  } catch (error) {
    throw new Error(error);
  }

  res.status(200).json({ tag: label });
}
