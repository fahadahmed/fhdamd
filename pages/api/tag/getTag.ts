// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Tag = {
  id: string;
  slug: string;
  label: string;
  description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tag>
) {
  const id = req.body.id;
  const db = admin.firestore();
  const tagRef = db.collection('tags').doc(id);
  const tag = await tagRef.get();
  res.status(200).json({
    id: req.body.id,
    ...tag.data(),
  } as Tag);
}
