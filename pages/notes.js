import { useEffect, useState } from "react";

import styles from '../styles/Notes.module.css'
import { fetchNotes } from "../apihelpers/noteapis/fetchNotes";
import  axios from "axios";
import Navbar from '../components/Navbar'

  

const Notess = (props) => {

    const {notes} = props;

    const [noteData, setNoteData] = useState(notes);
    const [description, setDesctiption] = useState();


    const addNote= async ()=>{

        const res = await fetch('/api/notes',{
            method:"POST",
            body: JSON.stringify({description}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();

    }

    const deleteNote= async (id)=>{
        const res =await axios.delete(`/api/notes/${id}`,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log("new notes",res.data);
        setNoteData(res.data);

    }


    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/notes',{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const data = await res.json();
            setNoteData(data);
          }
          fetchData();
    }, []);



  return (
    <>
    <Navbar/>
    <div className={styles.note_container}>
        <div className="add_notes">
            <form className={styles.note_form}>
            <label>Note Description</label>
            <input type="text" className={styles.note_input} placeholder="Description" name="description" onChange={(e)=>setDesctiption(e.target.value)}/>
            <button className={styles.note_btn} type="submit" onClick={addNote}>Add Note</button>
            </form>
        </div>
        <div>
            {noteData && noteData.map(element => (
                 <div className={styles.note_description} key={element._id}>

                 <p>{element.description}</p>

                 <button onClick={()=>deleteNote(element._id)}>Delete Note</button>
                
                </div>
             ))}
         </div>
           
    </div>
    </>
  )
}

export async function getServerSideProps(){
    const notes = await fetchNotes();
    return{
      props:{
        notes : notes ,
      }
    }
  }


export default Notess