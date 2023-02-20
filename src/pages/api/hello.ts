import type { NextApiRequest, NextApiResponse } from 'next';
import getCasas from '../../../lib/getCasas'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {casas, error} = await getCasas()
  return res.status(200).json({casas})
}
