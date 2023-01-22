// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Issue = {
  id: string;
  name: string;
  description: string;
  slug: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Issue[]>
) {
  const db = admin.firestore();
  const issues = (await db.collection('issues').get()).docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  res.status(200).json(issues as Issue[]);
}
