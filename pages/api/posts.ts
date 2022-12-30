// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../lib/firebaseAdmin';
import type { Post } from '../types/post';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const db = admin.firestore();
  const posts = (await db.collection('posts').get()).docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  res.status(200).json(posts as Post[]);
}
