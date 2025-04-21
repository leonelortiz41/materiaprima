import React, { useState, useEffect } from "react";
import FormularioAnalisis from "./FormularioAnalisis";
import ListadoRemitos from "./ListadoRemitos";

const App = () => {
  const [modo, setModo] = useState("listado"); // Controla la vista actual
  const [remitos, setRemitos] = useState(() => {
    // Recupera los remitos del localStorage al cargar la app
    const remitosGuardados = localStorage.getItem("remitos");
    return remitosGuardados ? JSON.parse(remitosGuardados) : [];
  });
  const [remitoSeleccionado, setRemitoSeleccionado] = useState(null); // Remito seleccionado para editar

  // Efecto para actualizar el localStorage cada vez que cambien los remitos
  useEffect(() => {
    console.log("Actualizando localStorage:", remitos);
    localStorage.setItem("remitos", JSON.stringify(remitos));
  }, [remitos]);

  const agregarRemito = (nuevoRemito) => {
    const nuevosRemitos = [...remitos, { id: Date.now(), ...nuevoRemito }];
    console.log("Nuevo remito agregado:", nuevosRemitos);
    setRemitos(nuevosRemitos);
  };

  const actualizarRemito = (id, remitoActualizado) => {
    const remitosActualizados = remitos.map((remito) =>
      remito.id === id ? { ...remito, ...remitoActualizado } : remito
    );
    console.log("Remitos actualizados:", remitosActualizados);
    setRemitos(remitosActualizados);
  };

  const borrarRemito = (id) => {
    setRemitos(remitos.filter((remito) => remito.id !== id));
  };

  const onVolver = () => {
    setModo("listado");
    setRemitoSeleccionado(null); // Limpia el remito seleccionado
  };

  return (
    <div>
      {modo === "listado" && (
        <ListadoRemitos
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
              ? actualizarRemito(remitoSeleccionado.id, remito)
              : agregarRemito(remito);
          }}
          onVolver={onVolver}
        />
      )}
    </div>
  );
};

export default App;