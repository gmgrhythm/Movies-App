import { hover } from '@testing-library/user-event/dist/hover';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          background: "black",
          color: "white",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" , color:"white" }}>
          <h1>Movies App</h1>
        </Link>

        <Link to="/fav" style={{ textDecoration: "none" , color:"white" }}>
          <h2 style={{ marginLeft: "2rem" }}>Favourites</h2>
        </Link>
      </div>
    );
  }
}