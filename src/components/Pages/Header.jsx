import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PageHome from "./PageHome";
// import PagePortofolio from "./PagePortofolio";

class Header extends Component {
  render() {
    return (
      <header className="container flex sticky top-0 mx-auto px-36 py-10 pb-12 items-center justify-between text-neutral-900 bg-white">
        <div className="mx-12">
          <Link to="/">
            <h1 className="font-bold text-2xl">My Portofolio</h1>
          </Link>
        </div>
        <div className="">
          <ul className="flex font-medium">
            <Link to="/">
              <li className="ml-11">Home</li>
            </Link>
            <Link to="/portofolio">
              <li className="ml-11">Portofolio</li>
            </Link>
            <Link to="/contact">
              <li className="ml-11 mr-6">Contact</li>
            </Link>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
