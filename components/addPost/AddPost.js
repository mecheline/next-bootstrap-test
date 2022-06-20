import React, { useState } from "react";
import classes from "./AddPost.module.css";

export default function AddPost(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");

  const submitData = (e) => {
    e.preventDefault()
    const record = {
      title,
      author,
      date,
      description,
    };
    props.addData(record);
  };

  return (
    <div className={classes.details}>
      <form onSubmit={submitData} method="POST">
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">
            Author
          </label>
          <input
            type="text"
            class="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">
            Date
          </label>
          <input
            type="date"
            class="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Primary
        </button>
      </form>
    </div>
  );
}
