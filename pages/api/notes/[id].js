// import { deleteNote, getNote, postNote, putNote } from '../../../apihelpers/noteapis/controller';
import connectToDatabase from '../../../lib/mongodb';
import Note from '../../../model/note';
// export default async function handler(req, res) {
//     await connectToDatabase();
//     const id = req.query

  
//     const note =await Note.find({_id:id})
//     // const note = await Note.findById(id);
//     console.log(note);
//     // note.deleteOne();
//     res.status(200).json(`Deleted Note successfully, note: ${note._id}`)
    
// }
export default async function handler(req,res){
    try{
        await connectToDatabase();
        const {id} = req.query;
        let note = await Note.find({_id:id});
        note = note[0]
        await note.deleteOne();
        note = await Note.find();
        res.status(200).send(note)
    }catch(err){
        res.status(400).send(err);
    }

}