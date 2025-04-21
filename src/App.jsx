import React, { useState, useEffect } from "react";
import ListadoRemitos from "./ListadoRemitos";
import EditarRemito from "./EditarRemito";
import FormularioAnalisis from "./FormularioAnalisis";

const App = () => {
  const [modo, setModo] = useState("listado"); // Controla la vista actual
  const [remitos, setRemitos] = useState(() => {
    // Recuperar remitos desde localStorage
    const remitosGuardados = localStorage.getItem("remitos");
    return remitosGuardados ? JSON.parse(remitosGuardados) : [];
  });
  const [remitoSeleccionado, setRemitoSeleccionado] = useState(null);

  useEffect(() => {
    // Guardar remitos en localStorage cada vez que cambien
    localStorage.setItem("remitos", JSON.stringify(remitos));
  }, [remitos]);

  // Función para agregar un nuevo remito
  const agregarRemito = (nuevoRemito) => {
    setRemitos([...remitos, { id: Date.now(), ...nuevoRemito }]);
    setModo("listado"); // Vuelve al listado después de agregar
  };

  // Función para actualizar un remito existente
  const actualizarRemito = (id, remitoActualizado) => {
    setRemitos(
      remitos.map((remito) =>
        remito.id === id ? { ...remito, ...remitoActualizado } : remito
      )
    );
    setModo("listado"); // Vuelve al listado después de editar
  };

  // Función para borrar un remito
  const borrarRemito = (id) => {
    setRemitos(remitos.filter((remito) => remito.id !== id));
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
            setModo("editar");
          }}
          onBorrar={borrarRemito}
        />
      )}

      {modo === "formulario" && (
        <FormularioAnalisis
          onGuardar={(nuevoRemito) => {
            agregarRemito(nuevoRemito); // Agrega el remito al listado
          }}
          onVolver={() => setModo("listado")} // Vuelve al listado
        />
      )}

      {modo === "editar" && (
        <EditarRemito
          remito={remitoSeleccionado}
          onGuardar={(datosActualizados) => {
            actualizarRemito(remitoSeleccionado.id, datosActualizados);
            setRemitoSeleccionado(null); // Limpia el remito seleccionado
          }}
          onVolver={() => {
            setRemitoSeleccionado(null);
            setModo("listado");
          }}
        />
      )}
    </div>
  );
};

export default App;