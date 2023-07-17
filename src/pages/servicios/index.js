import React, { useState, useEffect } from "react";
import PantallaServicios from "../../../components/servicios/PantallaServicios";

function index() {

  function getComponents() {
    return (
      <>
        <PantallaServicios/>
      </>
    );
  }

  return <>{getComponents()}</>;
}

export default index;