import React from "react";

const updateYear = new Date();
var year = updateYear.getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>Copywright ©️ {year}</p>
    </footer>
  );
}
