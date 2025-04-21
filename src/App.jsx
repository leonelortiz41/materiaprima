import React, { useState } from "react";
import MenuPrincipal from "./MenuPrincipal";
import FormularioAnalisis from "./FormularioAnalisis";

const App = () => {
  const [remitos, setRemitos] = useState([]); // Lista de remitos
  const [modo, setModo] = useState("menu"); // "menu" o "formulario"
  const [remitoSeleccionado, setRemitoSeleccionado] = useState(null); // Remito para editar

  const agregarRemito = (nuevoRemito) => {
    setRemitos([...remitos, { id: Date.now(), ...nuevoRemito }]);
    setModo("menu");
  };

  const editarRemito = (id, datosActualizados) => {
    setRemitos(
      remitos.map((remito) =>
        remito.id === id ? { ...remito, ...datosActualizados } : remito
      )
    );
    setModo("menu");
  };

  const borrarRemito = (id) => {
    setRemitos(remitos.filter((remito) => remito.id !== id));
  };

  return (
    <div>
      {modo === "menu" && (
        <MenuPrincipal
          remitos={remitos}
          onAgregar={() => {
            setRemitoSeleccionado(null);
            setModo("formulario");
          }}
          onEditar={(remito) => {
            setRemitoSeleccionado(remito);
            setModo("formulario");
          }}
          onBorrar={borrarRemito}
        />
      )}
      {modo === "formulario" && (
        <FormularioAnalisis
          remito={remitoSeleccionado}
          onGuardar={(remito) => {
            remitoSeleccionado
              ? editarRemito(remitoSeleccionado.id, remito)
              : agregarRemito(remito);
          }}
          onCancelar={() => setModo("menu")}
        />
      )}
    </div>
  );
};

export default App;