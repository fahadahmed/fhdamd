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
  const { name, description, id, slug } = req.body;
  console.log(name, description, id, slug);
  const db = admin.firestore();
  const updateDB = await db
    .collection('issues')
    .doc(id)
    .set({ name, description, slug });
  console.log(updateDB);

  res.status(200).json({
    success: true,
    message: 'The issue has been updated successfully',
    data: updateDB,
  });
}
