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
  const { label, description, id, slug } = req.body;
  console.log(label, description, id, slug);
  const db = admin.firestore();
  const updateDB = await db
    .collection('tags')
    .doc(id)
    .set({ label, description, slug });
  console.log(updateDB);

  res.status(200).json({
    success: true,
    message: 'The tag has been updated successfully',
    data: updateDB,
  });
}
