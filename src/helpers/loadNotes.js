import { db } from "../firebase/firebaseConfig"


export const loadNotes = async (uid) => {

    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    let notes = [];

    notesSnap.forEach(snapHijo => {
        const note = {
            id : snapHijo.id,
            ...snapHijo.data()
        }
        notes = [...notes, note];
    })
    
    return notes;

}