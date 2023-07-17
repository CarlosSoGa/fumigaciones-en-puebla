import React, { useState, useEffect } from "react";
import PantallaContacto from "../../../components/contacto/PantallaContacto";

function index() {

  function getComponents() {
    return (
      <>
        <PantallaContacto/>
      </>
    );
  }

  return <>{getComponents()}</>;
}

export default index;