import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data | string>) => {
  res.status(200).json({ status: 'ok' });
};

export default handler;
