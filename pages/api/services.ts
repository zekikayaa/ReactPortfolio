import { NextApiRequest, NextApiResponse } from "next";
 
import {services} from '../../data'

export default (req: NextApiRequest, res: NextApiResponse) => {
// we can check request type here is a get, delete, post, update

    // by default get request
    // console.log(services);
    res.status(200).json(services)

};
