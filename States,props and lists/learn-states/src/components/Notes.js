import React, { useState } from "react";
import SingleNote from "./SingleNote";

function Notes() {
  const [Notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState("");

  const [car, setcar] = useState({
    model: "Rolls Royce",
    year: 2027,
    color: "blue",
  });

  setcar({ ...car, color: "white" });

  function updateCurrNote(e) {
    setCurrNote(e.target.value);
  }

  function addNote(e) {
    const newNotesArray = [...Notes, currNote];
    setNotes(newNotesArray);
  }

  const ulStyle = {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
  };

  return (
    <>
      <input onChange={updateCurrNote} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul style={ulStyle}>
        {Notes.map((note, index) => {
          return (
            <li key={index}>
              <SingleNote note={note} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Notes;
