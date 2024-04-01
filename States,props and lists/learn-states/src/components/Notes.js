import React, { useState } from "react";

function Notes() {
  const [Notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState("");

  function updateCurrNote(e) {
    setCurrNote(e.target.value);
  }

  function addNote(e) {
    const newNotesArray = [...Notes, currNote];
    setNotes(newNotesArray);
  }

  return (
    <>
      <input onChange={updateCurrNote} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul>
        {Notes.map((note) => {
          return <li>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default Notes;
