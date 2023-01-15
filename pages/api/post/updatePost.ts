// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Data = {
  success: boolean;
  message: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, title, excerpt, content, slug, tags } = req.body;
  const db = admin.firestore();
  const updateDB = await db
    .collection('posts')
    .doc(id)
    .set({ title, excerpt, content, slug, tags });
  console.log(updateDB);

  res.status(200).json({
    success: true,
    message: 'The post has been updated successfully',
    data: updateDB,
  });
}
