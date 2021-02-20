// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { unsetAuthCookies } from 'next-firebase-auth'
import initAuth from "../../../firebase/initAuth";
import { NextApiRequest, NextApiResponse } from "next";

initAuth()

const handler = async (req: NextApiRequest, res:NextApiResponse) => {
  try {
    await unsetAuthCookies(req, res)
    res.status(200).json({ success: true })
  } catch (e) {
    res.status(500).json({ error: 'Unexpected error.' })
  }
}

export default handler