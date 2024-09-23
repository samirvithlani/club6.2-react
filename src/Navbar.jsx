import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflix/home">
                Netflix Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflix/shows">
                Netflix Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflix/movies">
                Netflix Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                FOrm Demo 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                FOrm Demo 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                FOrm Demo 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
                FOrm Demo 4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo5">
                FOrm Demo 5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                apidemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                apidemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/omdb">
                omdb
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/useeffect">
              useeffect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
