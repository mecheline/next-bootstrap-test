import React from "react";
import Link from "next/link";

export const PostDetails = ({ data }) => {
  return (
    <div class="row">
      <div class="col-sm-6 mx-auto">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.description}</p>
            <Link href="/">
              <a class="btn btn-primary">Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
