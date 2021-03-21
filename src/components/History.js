import React from "react";

import "../components/History.css";

function History(props) {
  return (
    <>
      <div class="flex-container" to={props.path}>
        <div class="textoContenedor">
          <h1 class="titulo">{props.titulo}</h1>
          <p class="texto">{props.descripcion}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default History;
