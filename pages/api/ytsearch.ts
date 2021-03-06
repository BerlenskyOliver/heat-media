import {NextApiRequest, NextApiResponse} from 'next'
const usetube = require('usetube')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query.q
    const videos = await usetube.searchVideo(query)
    res.status(200).json(videos)
}
