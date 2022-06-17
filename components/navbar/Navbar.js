import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={classes.details}>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
        <div class="container">
          <Link class="navbar-brand" href="/">
            <a>Hidden brand</a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse text-center "
            id="navbarTogglerDemo01"
          >
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="/">
                  <a>Posts</a>
                </Link>
              </li>
            </ul>

            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
