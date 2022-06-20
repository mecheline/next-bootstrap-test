import React from "react";
import Link from "next/link";

export const PostDetails = ({ data }) => {
  return (
    <div className="row">
      <div className="col-sm-6 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <Link href="/">
              <a className="btn btn-primary">Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
