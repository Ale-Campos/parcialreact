import React from "react";

const Navbar = ({ brand }) => {
  //este {brand} es lo mismo que poner props.brand, solo que usa destructuring
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
