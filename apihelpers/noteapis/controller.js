import Note from "../../model/note";

export async function getNote(req, res){
    try {
        console.log("Looking for records...")
        const notes = await Note.find();
        console.log("notes",notes,"end of notes");
        if(!notes){
            return res.status(404).json( { error: "Data not Found"})
        }
        // res.status(200).js   on(notes)
        res.send(notes);
    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}

export async function postNote(req, res){
    const { description } = req.body;
  
    if (!description) {
      return res.status(422).json({ message: 'Invalid input' });
    }
  
    const existingNote = await Note.findOne({description});

    const result = new Note({ description });
    const response = await result.save();

    console.log(result);
    
    res.status(201).json({body:result, message: 'Note added' });
}

export async function putNote(req, res){
    try {
        const { _id } = req.query;
        const formData = req.body;

        if(_id && formData){
            const note = await Note.findByIdAndUpdate(_id, formData);
            res.status(200).json(note)
        }
        res.status(404).json( { error: "Note Not Selected...!"})
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}

export async function deleteNote(req, res){
    const { id } = req.query;

    try {
        if(id ){
            const note = await Note.findByIdAndDelete(id);
           
            res.status(200).json(note)
        }
        res.status(404).json( { error: "Note Not Selected...!"})
    } catch (error) {
        res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}