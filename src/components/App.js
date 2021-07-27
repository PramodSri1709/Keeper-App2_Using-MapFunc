import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

const NoteData = (data) => {
  return(
<Note
  key = {data.id}
  title = {data.title}
  content = {data.content}
  />
  );
}

const App = () => {
  return (
    <div>
      <Header />

      {notes.map(NoteData)}

      <Footer />
    </div>
  );
}

export default App;
