// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookie, getCookies } from 'cookies-next';
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('Do we get inside the getUserSession API route');
  const cookie = getCookie('__session', { req, res });
  console.log('cookie', cookie);
  res.status(200).json({ name: 'John Doe' });
}
