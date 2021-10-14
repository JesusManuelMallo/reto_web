import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap-buttons";
import "react-bootstrap-buttons/dist/react-bootstrap-buttons.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <Button btnStyle="primary"> Home </Button>
      </Link>
    </nav>
  );
}
