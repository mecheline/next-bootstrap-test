import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.details}>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <a>Hidden brand</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center "
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <a>Posts</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/add-post">
                  <a>Add Post</a>
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
