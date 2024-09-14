import React from "react";
import DeleteIcon from "@mui/icons-material/DeleteRounded";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="add" onClick={() => props.onDelete(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
