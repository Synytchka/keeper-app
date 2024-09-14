import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  const [isEdited, setEdited] = useState(false);

  function handleClick() {
    setEdited(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteText((prevText) => ({ ...prevText, [name]: value }));
  }

  return (
    <div>
      <form className="create-note">
        {isEdited && (
          <Zoom in={isEdited}>
            <input
              onChange={handleChange}
              value={noteText.title}
              name="title"
              placeholder="Title"
            />
          </Zoom>
        )}

        <textarea
          onClick={handleClick}
          onChange={handleChange}
          value={noteText.content}
          name="content"
          placeholder="Take a note..."
          rows={isEdited ? 3 : 1}
        />
        <Zoom in={isEdited}>
          <Fab
            onClick={() => {
              props.onSubmit(noteText.title, noteText.content);
              setNoteText({ title: "", content: "" });
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
