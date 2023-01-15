// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';
import type { Post } from '../../types/post';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const id = req.body.id;
  const db = admin.firestore();
  const postRef = db.collection('posts').doc(id);
  const tag = await postRef.get();
  res.status(200).json({
    id: req.body.id,
    ...tag.data(),
  } as Post);
}
