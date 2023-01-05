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
  res: NextApiResponse<Tag[]>
) {
  const db = admin.firestore();
  const tags = (await db.collection('tags').get()).docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  console.log(tags);
  res.status(200).json(tags as Tag[]);
}
