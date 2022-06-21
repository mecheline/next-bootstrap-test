import React, { useState } from "react";
import classes from "./AddPost.module.css";

export default function AddPost(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");

  const submitData = (e) => {
    e.preventDefault();
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
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Primary
        </button>
      </form>
    </div>
  );
}
