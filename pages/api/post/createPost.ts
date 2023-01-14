// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from '../../../lib/firebaseAdmin';

type Post = {
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  tags: string[];
};

const db = admin.firestore();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const { title, excerpt, content, slug, tags } = req.body;
  console.log(title, excerpt, content, slug, tags);
  try {
    const response = await db.collection('posts').add({
      title,
      excerpt,
      slug,
      content,
      tags,
    });
    console.log(response);
  } catch (error: any) {
    throw new Error(error);
  }
  res.status(200).json({ title, excerpt, content, slug, tags });
}
