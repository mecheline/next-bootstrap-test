import React, { useEffect } from "react";
import Link from "next/link";

export const Post = ({ result }) => {
  console.log(result);
  return (
    <div className="row mt-5">
      {result.map((item) => {
        return (
          <div className="col-sm-6 mb-3" key={item._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <Link href={`/${item.id}`}>
                  <a className="btn btn-primary">Show detail</a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
