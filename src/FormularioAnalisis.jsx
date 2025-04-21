import React, { useState } from "react";
import "./styles.css";

const FormularioAnalisis = ({ remito, onGuardar, onCancelar }) => {
  const [datos, setDatos] = useState(
    remito || {
      origen: "",
      tipoFruta: "",
      horaVolcado: "",
      horaMuestreo: "",
      numeroRemito: "",
      pesoValde: "",
      cantidadLimonesEnValde: "",
      cantidadPequenos: "",
      pesoPequenos: "",
      cantidadPodridos: "",
      pesoMuestra: "",
      mlBromuro: "",
      normalidadKBrO3KBr: "",
      pesoBandejaLimones: "",
      pesoJugoConPulpa: "",
      pesoJugoSinPulpa: "",
      brix: "",
      pesoMuestraJugo: "",
      volumenGastado: "",
      cantidadLimones: "",
      cantLimonesChicos: "",
      cantLimonesMedianos: "",
      cantLimonesGrandes: "",
      cantManchados: "",
      cantBlandos: "",
      cantPodridos: "",
      cantAmarillos: "",
      cantAmarilloVerdozo: "",
      cantVerdes: "",
    }
  );

  const calcularResultado = () => {
    const { mlBromuro, normalidadKBrO3KBr, pesoMuestra } = datos;
    if (mlBromuro && normalidadKBrO3KBr && pesoMuestra) {
      return (
        (mlBromuro * normalidadKBrO3KBr * 68) / pesoMuestra
      ).toFixed(2);
    }
    return "N/A";
  };

  const calcularRendimientoConPulpa = () => {
    const { pesoJugoConPulpa, pesoBandejaLimones } = datos;
    if (pesoJugoConPulpa && pesoBandejaLimones) {
      return ((pesoJugoConPulpa / pesoBandejaLimones) * 100).toFixed(2);
    }
    return "N/A";
  };

  const calcularRendimientoSinPulpa = () => {
    const { pesoJugoSinPulpa, pesoBandejaLimones } = datos;
    if (pesoJugoSinPulpa && pesoBandejaLimones) {
      return ((pesoJugoSinPulpa / pesoBandejaLimones) * 100).toFixed(2);
    }
    return "N/A";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar(datos);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Botón para volver */}
      <button
        type="button"
        onClick={onCancelar}
        className="cancel"
      >
        Volver
      </button>

      <h1>{remito ? "Editar Remito" : "Agregar Remito"}</h1>

      {/* Campos del formulario */}
      <label>
        Origen:
        <input
          type="text"
          name="origen"
          value={datos.origen}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo de Fruta:
        <select name="tipoFruta" value={datos.tipoFruta} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="convencional">Convencional</option>
          <option value="organica">Orgánica</option>
          <option value="AF">AF</option>
        </select>
      </label>
      <label>
        Peso de Muestra:
        <input
          type="number"
          name="pesoMuestra"
          value={datos.pesoMuestra}
          onChange={handleChange}
        />
      </label>
      <label>
        Normalidad de KBrO3/KBr:
        <input
          type="number"
          name="normalidadKBrO3KBr"
          value={datos.normalidadKBrO3KBr}
          onChange={handleChange}
        />
      </label>
      {/* Salida del cálculo */}
      <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0", borderRadius: "5px" }}>
        <strong>Resultado:</strong> {calcularResultado()}
      </div>

      <label>
        ML Gastado de Bromuro/Bromato:
        <input
          type="number"
          name="mlBromuro"
          value={datos.mlBromuro}
          onChange={handleChange}
        />
      </label>

      <label>
        Peso de Bandeja de Limones:
        <input
          type="number"
          name="pesoBandejaLimones"
          value={datos.pesoBandejaLimones}
          onChange={handleChange}
        />
      </label>
      <label>
        Peso de Jugo con Pulpa:
        <input
          type="number"
          name="pesoJugoConPulpa"
          value={datos.pesoJugoConPulpa}
          onChange={handleChange}
        />
      </label>
      {/* Rendimiento del jugo con pulpa */}
      <div style={{ marginTop: "20px", padding: "10px", background: "#e6f7ff", borderRadius: "5px" }}>
        <strong>Rendimiento del jugo con pulpa:</strong> {calcularRendimientoConPulpa()}%
      </div>

      <label>
        Peso de Jugo sin Pulpa:
        <input
          type="number"
          name="pesoJugoSinPulpa"
          value={datos.pesoJugoSinPulpa}
          onChange={handleChange}
        />
      </label>
      {/* Rendimiento del jugo sin pulpa */}
      <div style={{ marginTop: "20px", padding: "10px", background: "#ffe6e6", borderRadius: "5px" }}>
        <strong>Rendimiento del jugo sin pulpa:</strong> {calcularRendimientoSinPulpa()}%
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
};

export default FormularioAnalisis;