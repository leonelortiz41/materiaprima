import React, { useState } from "react";

const MenuCarpetas = ({ carpetas, onSeleccionar, onAgregar }) => {
  const [fechaCarpeta, setFechaCarpeta] = useState("");

  const handleAgregar = () => {
    if (fechaCarpeta) {
      onAgregar(fechaCarpeta);
      setFechaCarpeta("");
    }
  };

  return (
    <div>
      <h1>Carpetas</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {carpetas.map((carpeta) => (
          <li
            key={carpeta.fecha}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <span>{carpeta.fecha}</span>
            <button
              style={{
                marginLeft: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => onSeleccionar(carpeta)}
            >
              Abrir
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        <input
          type="date"
          value={fechaCarpeta}
          onChange={(e) => setFechaCarpeta(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleAgregar} style={{ padding: "5px 10px" }}>
          Crear Carpeta
        </button>
      </div>
    </div>
  );
};

export default MenuCarpetas;