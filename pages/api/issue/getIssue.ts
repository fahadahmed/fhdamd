// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Issue = {
  id: string;
  slug: string;
  label: string;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Issue>
) {
  const id = req.body.id;
  const db = admin.firestore();
  const issueRef = db.collection('issues').doc(id);
  const issue = await issueRef.get();
  res.status(200).json({
    id: req.body.id,
    ...issue.data(),
  } as Issue);
}
