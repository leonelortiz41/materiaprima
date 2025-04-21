import React, { useState } from "react";
import MenuCarpetas from "./MenuCarpetas";
import SubmenuRemitos from "./SubmenuRemitos";
import FormularioAnalisis from "./FormularioAnalisis";

const App = () => {
  const [carpetas, setCarpetas] = useState([]); // Lista de carpetas
  const [carpetaSeleccionada, setCarpetaSeleccionada] = useState(null); // Carpeta activa
  const [modo, setModo] = useState("carpetas"); // "carpetas", "remitos" o "formulario"
  const [remitoSeleccionado, setRemitoSeleccionado] = useState(null); // Remito activo

  const agregarCarpeta = (nuevaCarpeta) => {
    setCarpetas([...carpetas, nuevaCarpeta]);
  };

  const agregarRemito = (nuevoRemito) => {
    setCarpetas(
      carpetas.map((carpeta) =>
        carpeta.fecha === carpetaSeleccionada.fecha
          ? { ...carpeta, remitos: [...carpeta.remitos, nuevoRemito] }
          : carpeta
      )
    );
    setModo("remitos");
  };

  const editarRemito = (id, datosActualizados) => {
    setCarpetas(
      carpetas.map((carpeta) =>
        carpeta.fecha === carpetaSeleccionada.fecha
          ? {
              ...carpeta,
              remitos: carpeta.remitos.map((remito) =>
                remito.id === id ? { ...remito, ...datosActualizados } : remito
              ),
            }
          : carpeta
      )
    );
    setModo("remitos");
  };

  const borrarRemito = (id) => {
    setCarpetas(
      carpetas.map((carpeta) =>
        carpeta.fecha === carpetaSeleccionada.fecha
          ? {
              ...carpeta,
              remitos: carpeta.remitos.filter((remito) => remito.id !== id),
            }
          : carpeta
      )
    );
  };

  return (
    <div>
      {modo === "carpetas" && (
        <MenuCarpetas
          carpetas={carpetas}
          onSeleccionar={(carpeta) => {
            setCarpetaSeleccionada(carpeta);
            setModo("remitos");
          }}
          onAgregar={(fecha) => agregarCarpeta({ fecha, remitos: [] })}
        />
      )}
      {modo === "remitos" && (
        <SubmenuRemitos
          carpeta={carpetaSeleccionada}
          onAgregar={() => {
            setRemitoSeleccionado(null);
            setModo("formulario");
          }}
          onEditar={(remito) => {
            setRemitoSeleccionado(remito);
            setModo("formulario");
          }}
          onBorrar={borrarRemito}
          onVolver={() => setModo("carpetas")}
        />
      )}
      {modo === "formulario" && (
        <FormularioAnalisis
          remito={remitoSeleccionado}
          onGuardar={(remito) => {
            remitoSeleccionado
              ? editarRemito(remito.id, remito)
              : agregarRemito({ id: Date.now(), ...remito });
          }}
          onCancelar={() => setModo("remitos")}
        />
      )}
    </div>
  );
};

export default App;