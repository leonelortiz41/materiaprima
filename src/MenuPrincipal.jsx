import React from "react";

const MenuPrincipal = ({ remitos, onAgregar, onEditar, onBorrar }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Remitos Guardados</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {remitos.map((remito) => (
          <li
            key={remito.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <span>
              <strong>{remito.origen}</strong> - {remito.tipoFruta}
            </span>
            <div>
              <button
                style={{
                  marginRight: "5px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => onEditar(remito)}
              >
                Editar
              </button>
              <button
                style={{
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => onBorrar(remito.id)}
              >
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        style={{
          marginTop: "20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onAgregar}
      >
        Agregar Remito
      </button>
    </div>
  );
};

export default MenuPrincipal;