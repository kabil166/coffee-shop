import { deleteNote, getNote, postNote, putNote } from '../../../apihelpers/noteapis/controller';
import connectToDatabase from '../../../lib/mongodb';
export default async function handler(req, res) {
  await connectToDatabase();

    const { method } = req

    switch(method){
        case 'GET' :
            getNote(req, res)
            break;
        case 'POST':
            postNote(req, res)
            break;
        case 'PUT':
            putNote(req, res)
            break;
        case 'DELETE':
            deleteNote(req,res)
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
}
