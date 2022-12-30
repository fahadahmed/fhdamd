// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';
import type { Post } from '../../types/post';
import find from 'lodash/find';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const { slug } = req.query;
  const db = admin.firestore();
  const posts = (await db.collection('posts').get()).docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  const post = find(posts, (post: Post) => post.slug === slug);
  res.status(200).json(post as Post);
}
